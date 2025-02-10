import { object_property_exists } from "./object_property_exists.mjs";
import { json_to } from "./json_to.mjs";
import { global_function } from "./global_function.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_document_head } from "./html_document_head.mjs";
import { html_element } from "./html_element.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function html_font_register(font_name, font_path) {
  let g = global_function(html_font_register);
  let key = json_to(font_name, font_path);
  if (object_property_exists(object, "property_name")) {
  }
  let style = html_element(html_document_head(), "style");
  html_attribute_set(style, "type", "text/css");
  let value = string_combine_multiple([
    "\n      @font-face {\n        font-family: '",
    font_name,
    "';\n        src: url('",
    font_path,
    ".woff2') format('woff2'),\n             url('",
    font_path,
    ".woff') format('woff');\n        font-weight: normal;\n        font-style: normal;\n      }\n    ",
  ]);
  html_inner_set(style, value);
}
