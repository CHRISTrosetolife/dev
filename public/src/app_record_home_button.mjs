import { app_record_verse } from "./app_record_verse.mjs";
import { app_record_home } from "./app_record_home.mjs";
import { html_button_width_full_text_click_home } from "./html_button_width_full_text_click_home.mjs";
export function app_record_home_button(context) {
  let { root } = context;
  html_button_width_full_text_click_home(
    root,
    async () => await app_record_home(context, app_record_verse),
  );
}
