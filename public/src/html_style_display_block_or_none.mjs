import { html_style_display_none } from "./html_style_display_none.mjs";
import { html_style_display_block } from "./html_style_display_block.mjs";
export function html_style_display_block_or_none(component, condition) {
  if (condition) {
    html_style_display_block(component);
  } else {
    html_style_display_none(component);
  }
}
