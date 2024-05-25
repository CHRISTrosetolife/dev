import { log } from "./log.mjs";
import { file_overwrite_generic } from "./file_overwrite_generic.mjs";
import textToSpeech from "@google-cloud/text-to-speech";
import { file_exists } from "./file_exists.mjs";
export async function gcloud_tts(language_code, voice, text, output_path) {
  if (await file_exists(output_path)) {
    return {
      created: false,
    };
  }
  let { code, male } = language_code;
  const client = new textToSpeech.TextToSpeechClient();
  log(textToSpeech.listVoices());
  const request = {
    input: {
      text: text,
    },
    voice: {
      languageCode: code,
      voice,
      ssmlGender: male ? "MALE" : "FEMALE",
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
