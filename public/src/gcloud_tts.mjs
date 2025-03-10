import { string_empty_not_is } from "./string_empty_not_is.mjs";
import { assert } from "./assert.mjs";
import { tautology } from "./tautology.mjs";
import { retry } from "./retry.mjs";
import { file_overwrite_binary } from "./file_overwrite_binary.mjs";
import textToSpeech from "@google-cloud/text-to-speech";
import { file_exists } from "./file_exists.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { object_merge_strict } from "./object_merge_strict.mjs";
export async function gcloud_tts(
  language_code,
  voice,
  ssml_gender,
  text,
  output_path,
) {
  let result = {
    output_path,
  };
  if (await file_exists(output_path)) {
    return object_merge_strict(
      {
        created: false,
      },
      result,
    );
  }
  assert(string_empty_not_is, [text]);
  let client = new textToSpeech.TextToSpeechClient();
  let request = {
    input: {
      text: text,
    },
    voice: {
      languageCode: language_code,
      name: string_combine_multiple([language_code, "-", voice]),
      ssmlGender: ssml_gender,
    },
    audioConfig: {
      audioEncoding: "MP3",
    },
  };
  let [response] = await retry(
    3,
    async () => await client.synthesizeSpeech(request),
    tautology,
  );
  let data = response.audioContent;
  await file_overwrite_binary(output_path, data);
  return object_merge_strict(
    {
      created: true,
    },
    result,
  );
}
