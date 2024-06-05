import { retry_if } from "./retry_if.mjs";
import { retry } from "./retry.mjs";
import { log } from "./log.mjs";
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
  log({
    contents,
  });
  ("mimeTypes:");
  ("text/plain");
  ("text/html");
  let translationClient = new TranslationServiceClient();
  let request = {
    parent: `projects/letjesusbeexalted/locations/global`,
    contents,
    mimeType: "text/plain",
    sourceLanguageCode: sourceLanguageCode,
    targetLanguageCode: targetLanguageCode,
  };
  let [response] = await retry(
    3,
    async () => {
      let [response] = await translationClient.translateText(request);
    },
    retry_if(["UNAVAILABLE", "DEADLINE_EXCEEDED"]),
  );
  let { translations } = response;
  let result = list_map(translations, (t) => t.translatedText);
  return result;
}
