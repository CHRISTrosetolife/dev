import { html_font_register_generic } from "./html_font_register_generic.mjs";
export function html_font_register(font_name, font_path) {
  let extensions = ["woff2", "woff"];
  html_font_register_generic(font_name, font_path, extensions);
}
