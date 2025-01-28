import { html_p_text } from "./html_p_text.mjs";
import { storage_local_initialize } from "./storage_local_initialize.mjs";
export function app_language_2_tutorial_message(
  app_fn,
  root,
  tutorial_message,
) {
  if (storage_local_initialize(app_fn, "tutorial", true) === true) {
    html_p_text(root, tutorial_message);
  }
}
