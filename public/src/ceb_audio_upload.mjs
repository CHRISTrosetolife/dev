import { storage_upload_file } from "./storage_upload_file.mjs";
import { gcloud_tts } from "./gcloud_tts.mjs";
import { log } from "./log.mjs";
import { folder_gitignore_path } from "./folder_gitignore_path.mjs";
import { ceb_audio_path } from "./ceb_audio_path.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { ceb_audio_voices } from "./ceb_audio_voices.mjs";
import { ceb_audio_language_code } from "./ceb_audio_language_code.mjs";
export async function ceb_audio_upload(text) {
  let language_code = ceb_audio_language_code();
  let voices = ceb_audio_voices();
  await each_index_async(voices, async (voice, voice_index) => {
    let file_path = ceb_audio_path(voice_index, text);
    let output_path = folder_gitignore_path(file_path);
    if (0) log(output_path);
    let { code, male } = voice;
    let { created } = await gcloud_tts(
      language_code,
      code,
      male ? "MALE" : "FEMALE",
      text,
      output_path,
    );
    if (created) {
      await storage_upload_file(output_path, file_path);
      log("uploaded");
    }
  });
}
