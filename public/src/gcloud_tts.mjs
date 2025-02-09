import { tautology } from "./tautology.mjs";
import { retry } from "./retry.mjs";
import { file_overwrite_binary } from "./file_overwrite_binary.mjs";
import textToSpeech from "@google-cloud/text-to-speech";
import { file_exists } from "./file_exists.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function gcloud_tts(
  language_code,
  voice,
  ssml_gender,
  text,
  output_path,
) {
  if (await file_exists(output_path)) {
    return {
      created: false,
    };
  }
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
  return {
    created: true,
  };
}
