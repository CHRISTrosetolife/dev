import { object_property_get } from "./object_property_get.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
export function app_language2_words_get(context) {
  let app_fn = object_property_get(context, "app_fn");
  return storage_local_get(app_fn, "words", {});
}
