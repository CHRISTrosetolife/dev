import { html_style_flex_1 } from "./html_style_flex_1.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_style_width } from "./html_style_width.mjs";
import { html_style_flex_row_centered } from "./html_style_flex_row_centered.mjs";
import { html_style } from "./html_style.mjs";
import { html_div } from "./html_div.mjs";
export function app_code_section(args, indent) {
  let { parent } = args;
  let section = html_div(parent);
  html_style(section, {
    "overflow-wrap": "anywhere",
    "word-break": "break-word",
  });
  if (indent) {
    html_style_flex_row_centered(section);
    let left = html_div(section);
    html_style_width(left, string_combine_multiple(["1ch"]));
    section = html_div(section);
    html_style_flex_1(section);
  }
  return section;
}
