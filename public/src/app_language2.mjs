import { app_language_group_get } from "./app_language_group_get.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export async function app_language2(language_learn, language_fluent) {
  let body = html_style_default_initialize();
  let context = {
    app_fn,
    language_learn,
    language_fluent,
    invert,
  };
  await app_language_group_get();
}
