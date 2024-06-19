import { html_style_units } from "./html_style_units.mjs";
export function html_style_rounded_padded_style() {
  return {
    padding: html_style_units(2),
    "border-radius": html_style_units(5),
  };
}
