import { clipboard_copy_web } from "./clipboard_copy_web.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export function html_button_copy_get(result, text_get) {
  html_button_width_full_text_click(result, "📋 copy", () => {
    clipboard_copy_web(text_get());
  });
}
