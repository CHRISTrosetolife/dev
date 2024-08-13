import { list_map_index_async } from "./list_map_index_async.mjs";
import { audio_upload_file } from "./audio_upload_file.mjs";
import { string_is } from "./string_is.mjs";
import { assert } from "./assert.mjs";
import { audio_path } from "./audio_path.mjs";
import { audio_language } from "./audio_language.mjs";
import { gcloud_tts } from "./gcloud_tts.mjs";
import { log } from "./log.mjs";
import { folder_gitignore_path } from "./folder_gitignore_path.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function audio_upload(language, text) {
  assert(string_is, [text]);
  let { language_code, voices } = await audio_language(language);
  let results = await list_map_index_async(
    voices,
    async (voice, voice_index) => {
      let file_path = await audio_path(language, voice_index, text);
      let output_path = folder_gitignore_path(file_path);
      let { code, male } = voice;
      let result = await gcloud_tts(
        language_code,
        code,
        male ? "MALE" : "FEMALE",
        text,
        output_path,
      );
      let { created } = result;
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
        await audio_upload_file(file_path);
      }
      return result;
    },
  );
}
