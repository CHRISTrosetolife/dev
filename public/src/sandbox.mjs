import { log } from "./log.mjs";
import { TranslationServiceClient } from "@google-cloud/translate";
export async function sandbox() {
  let text = "hello";
  const translationClient = new TranslationServiceClient();
  async function translateText() {
    const request = {
      parent: `projects/letjesusbeexalted/locations/global`,
      contents: [text],
      mimeType: "text/plain",
      sourceLanguageCode: "en",
      targetLanguageCode: "es",
    };
    const [response] = await translationClient.translateText(request);
    for (const translation of response.translations) {
      log(`Translation: ${translation.translatedText}`);
    }
  }
  translateText();
}
