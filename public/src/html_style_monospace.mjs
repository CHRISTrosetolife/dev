import { html_style } from "./html_style.mjs";
export function html_style_monospace(component) {
  let value = "monospace";
  html_style(component, {
    "font-family": value,
  });
}
