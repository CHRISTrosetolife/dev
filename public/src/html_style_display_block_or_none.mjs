import { html_style_display_none } from "./html_style_display_none.mjs";
import { html_style_display_block } from "./html_style_display_block.mjs";
export function html_style_display_block_or_none(condition, p_error_message) {
  if (condition) {
    html_style_display_block(p_error_message);
  } else {
    html_style_display_none(p_error_message);
  }
}
