import textToSpeech from "@google-cloud/text-to-speech";
export async function gcloud_tts(language_code, text, output_path) {
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
  await writeFile(output_path, response.audioContent, "binary");
}
