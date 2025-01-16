import { app_language_group_get } from "./app_language_group_get.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export async function app_ceb2() {
  let body = html_style_default_initialize();
  await app_language_group_get();
}
