import { html_button_home } from "./html_button_home.mjs";
import { app_record_home } from "./app_record_home.mjs";
export function app_record_home_button(context, on_verse) {
  let { root } = context;
  html_button_home(root, async () => await app_record_home(context, on_verse));
}
