import { html_style_success } from "./html_style_success.mjs";
export function html_style_success_if(actual, expected, b) {
  if (actual === expected) {
    html_style_success(b);
  }
}
