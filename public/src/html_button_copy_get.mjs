import { html_button } from "./html_button.mjs";
import { clipboard_copy_web } from "./clipboard_copy_web.mjs";
export function html_button_copy_get(result, text_get) {
  html_button(result, "📋 copy", () => {
    clipboard_copy_web(text_get());
  });
}
