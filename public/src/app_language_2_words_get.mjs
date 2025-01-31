import { object_property_set } from "./object_property_set.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { storage_local_initialize } from "./storage_local_initialize.mjs";
export function app_language_2_words_get(context) {
  if (object_property_exists(context, "words")) {
    return object_property_get(context, "words");
  }
  let app_fn = object_property_get(context, "app_fn");
  let words = storage_local_initialize(app_fn, "words", {});
  object_property_set(context, "words", words);
  return app_language_2_words_get(context);
}
