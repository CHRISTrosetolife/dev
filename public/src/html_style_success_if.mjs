import { html_style_success } from "./html_style_success.mjs";
export function html_style_success_if(version_code, actual, b) {
  if (version_code === actual) {
    html_style_success(b);
  }
}
