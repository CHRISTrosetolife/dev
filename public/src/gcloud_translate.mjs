import { function_run } from "./function_run.mjs";
import { list_map } from "./list_map.mjs";
import { TranslationServiceClient } from "@google-cloud/translate";
export async function gcloud_translate(
  sourceLanguageCode,
  targetLanguageCode,
  mimeType,
  function_name,
  args,
) {
  let contents = await function_run(function_name, args);
  ("mimeTypes:");
  ("text/plain");
  ("text/html");
  const translationClient = new TranslationServiceClient();
  const request = {
    parent: `projects/letjesusbeexalted/locations/global`,
    contents,
    mimeType,
    sourceLanguageCode: sourceLanguageCode,
    targetLanguageCode: targetLanguageCode,
  };
  const responses = await translationClient.translateText(request);
  list_map(responses);
  let { translations } = response;
  let result = list_map(translations, (t) => t.translatedText);
  return result;
}
