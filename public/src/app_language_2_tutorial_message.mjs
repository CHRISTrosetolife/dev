import { object_property_get } from "./object_property_get.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { storage_local_initialize } from "./storage_local_initialize.mjs";
export function app_language_2_tutorial_message(
  context,
  tutorial_message,
  parent,
) {
  let app_fn = object_property_get(context, "app_fn");
  if (storage_local_initialize(app_fn, "count", 0) === 0) {
    html_p_text(parent, tutorial_message);
  }
}
