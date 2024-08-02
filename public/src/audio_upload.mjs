import { string_is } from "./string_is.mjs";
import { assert } from "./assert.mjs";
import { audio_path } from "./audio_path.mjs";
import { audio_language } from "./audio_language.mjs";
import { storage_upload_file } from "./storage_upload_file.mjs";
import { gcloud_tts } from "./gcloud_tts.mjs";
import { log } from "./log.mjs";
import { folder_gitignore_path } from "./folder_gitignore_path.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function audio_upload(language, text) {
  assert(string_is, [text]);
  let { language_code, voices } = await audio_language(language);
  await each_index_async(voices, async (voice, voice_index) => {
    let file_path = await audio_path(language, voice_index, text);
    let output_path = folder_gitignore_path(file_path);
    let { code, male } = voice;
    let { created } = await gcloud_tts(
      language_code,
      code,
      male ? "MALE" : "FEMALE",
      text,
      output_path,
    );
    if (created) {
      log(
        string_combine_multiple([
          "audio uploading ",
          language,
          " ",
          code,
          " '",
          text,
          "' ...",
        ]),
      );
      let output_path = folder_gitignore_path(file_path);
      await storage_upload_file(output_path, file_path);
    }
  });
}
