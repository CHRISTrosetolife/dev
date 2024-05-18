import { list_map } from "./list_map.mjs";
import { log } from "./log.mjs";
import { TranslationServiceClient } from "@google-cloud/translate";
export async function sandbox() {
  let text = "hello";
  let sourceLanguageCode = "en";
  let targetLanguageCode = "es";
  const translationClient = new TranslationServiceClient();
  async function translateText() {
    const request = {
      parent: `projects/letjesusbeexalted/locations/global`,
      contents: [text],
      mimeType: "text/plain",
      sourceLanguageCode: sourceLanguageCode,
      targetLanguageCode: targetLanguageCode,
    };
    const [response] = await translationClient.translateText(request);
    let { translations } = response;
    let result = list_map(translations, (t) => t.translatedText);
    for (const translation of response.translations) {
      log(`Translation: ${translation.translatedText}`);
    }
  }
  await translateText();
}
