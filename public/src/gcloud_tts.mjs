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
  const client = new textToSpeech.TextToSpeechClient();
  const request = {
    input: {
      text: text,
    },
    voice: {
      languageCode: language_code,
      voice,
      ssmlGender: "NEUTRAL",
    },
    audioConfig: {
      audioEncoding: "MP3",
    },
  };
  log({
    request,
  });
  const [response] = await client.synthesizeSpeech(request);
  await file_overwrite_generic(output_path, response.audioContent, "binary");
  return {
    created: true,
  };
}
