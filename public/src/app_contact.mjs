import { app_contact_instructions } from "./app_contact_instructions.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export function app_contact() {
  let root = html_style_default_initialize();
  app_contact_instructions(root);
}
