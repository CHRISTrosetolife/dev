import { log } from "./log.mjs";
const { TranslationServiceClient } = require("@google-cloud/translate");
export async function sandbox() {
  const translationClient = new TranslationServiceClient();
  async function translateText() {
    const request = {
      parent: `projects/${projectId}/locations/${location}`,
      contents: [text],
      mimeType: "text/plain",
      sourceLanguageCode: "en",
      targetLanguageCode: "sr-Latn",
    };
    const [response] = await translationClient.translateText(request);
    for (const translation of response.translations) {
      console.log(`Translation: ${translation.translatedText}`);
    }
  }
  translateText();
}
