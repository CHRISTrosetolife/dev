import { list_map } from "./list_map.mjs";
import { TranslationServiceClient } from "@google-cloud/translate";
export async function gcloud_translate() {
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
    return result;
  }
  return await translateText();
}
