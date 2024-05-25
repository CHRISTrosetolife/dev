import { file_overwrite_generic } from "./file_overwrite_generic.mjs";
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
  const client = new textToSpeech.TextToSpeechClient();
  const request = {
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
  const [response] = await client.synthesizeSpeech(request);
  await file_overwrite_generic(output_path, response.audioContent, "binary");
  return {
    created: true,
  };
}
