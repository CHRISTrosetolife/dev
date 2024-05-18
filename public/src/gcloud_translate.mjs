import { function_run } from "./function_run.mjs";
import { list_map } from "./list_map.mjs";
import { TranslationServiceClient } from "@google-cloud/translate";
export async function gcloud_translate(
  sourceLanguageCode,
  targetLanguageCode,
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
    mimeType: "text/plain",
    sourceLanguageCode: sourceLanguageCode,
    targetLanguageCode: targetLanguageCode,
  };
  const [response] = await translationClient.translateText(request);
  let { translations } = response;
  let result = list_map(translations, (t) => t.translatedText);
  return result;
}
