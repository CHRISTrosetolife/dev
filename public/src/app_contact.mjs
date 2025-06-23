import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { app_load } from "./app_load.mjs";
export async function app_contact() {
  html_style_default_initialize();
  await app_load("contact_main");
}
