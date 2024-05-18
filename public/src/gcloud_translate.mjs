import { list_map } from "./list_map.mjs";
import { TranslationServiceClient } from "@google-cloud/translate";
export async function gcloud_translate(
  sourceLanguageCode,
  targetLanguageCode,
  mimeType,
  text,
) {
    "text/plain"
    "text/html"
  const translationClient = new TranslationServiceClient();
  const request = {
    parent: `projects/letjesusbeexalted/locations/global`,
    contents: [text],
    mimeType,
    sourceLanguageCode: sourceLanguageCode,
    targetLanguageCode: targetLanguageCode,
  };
  const [response] = await translationClient.translateText(request);
  let { translations } = response;
  let result = list_map(translations, (t) => t.translatedText);
  return result;
}
