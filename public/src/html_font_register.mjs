import { list_map } from "./list_map.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
import { json_to } from "./json_to.mjs";
import { global_function } from "./global_function.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_document_head } from "./html_document_head.mjs";
import { html_element } from "./html_element.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
export function html_font_register(font_name, font_path) {
  let g = global_function(html_font_register);
  let key = json_to(font_name, font_path);
  if (object_property_exists_not(g, key)) {
    let style = html_element(html_document_head(), "style");
    html_attribute_set(style, "type", "text/css");
    let value = string_combine_multiple([
      "@font-face { font-family: '",
      font_name,
      "'; src: ",
      list_join_comma_space(
        list_map(["woff2", "woff"], (extension) =>
          string_combine_multiple([
            "url('",
            font_path,
            ".",
            extension,
            "') format('",
            extension,
            "')",
          ]),
        ),
      ),
      "; font-weight: normal; font-style: normal; }",
    ]);
    html_inner_set(style, value);
    object_property_set(g, key, true);
  }
}
