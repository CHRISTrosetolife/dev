import { log } from "./log.mjs";
import textToSpeech from "@google-cloud/text-to-speech";
export async function gcloud_tts(language_code, text) {
  const client = new textToSpeech.TextToSpeechClient();
  const request = {
    input: {
      text: text,
    },
    voice: {
      languageCode: language_code,
      ssmlGender: "NEUTRAL",
    },
    audioConfig: {
      audioEncoding: "MP3",
    },
  };
  const [response] = await client.synthesizeSpeech(request);
  const writeFile = util.promisify(fs.writeFile);
  await writeFile("output.mp3", response.audioContent, "binary");
  console.log("Audio content written to file: output.mp3");
}
