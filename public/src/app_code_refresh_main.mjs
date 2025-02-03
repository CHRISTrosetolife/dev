import { html_style } from "./html_style.mjs";
import { html_style_height_full } from "./html_style_height_full.mjs";
import { html_style_width_full } from "./html_style_width_full.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_background_color_transparent } from "./html_style_background_color_transparent.mjs";
import { html_clear_scroll_top_centered_context } from "./html_clear_scroll_top_centered_context.mjs";
import { app_code_refresh_functions } from "./app_code_refresh_functions.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { html_p_text } from "./html_p_text.mjs";
export function app_code_refresh_main(context) {
  let body = html_document_body();
  let overlay = html_div(body);
  html_style_width_full(overlay);
  html_style_height_full(overlay);
  html_style(overlay, {
    margin: 0,
  });
  html_style_background_color_transparent(overlay, "black", 75);
  html_p_text(overlay, "Loading...");
  return;
  let root = html_clear_scroll_top_centered_context(context);
  html_button_width_full_text_click(root, "Functions", async () => {
    await app_code_refresh_functions(context);
  });
}
