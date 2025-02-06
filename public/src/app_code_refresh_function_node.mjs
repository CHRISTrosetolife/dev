import { each } from "./each.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_code_statement_end } from "./js_code_statement_end.mjs";
import { html_code_string } from "./html_code_string.mjs";
import { js_keyword_from } from "./js_keyword_from.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { log } from "./log.mjs";
import { html_style_font_color } from "./html_style_font_color.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { js_keyword_import } from "./js_keyword_import.mjs";
import { html_code_keyword } from "./html_code_keyword.mjs";
import { list_first } from "./list_first.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { folder_current_prefix } from "./folder_current_prefix.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { equal } from "./equal.mjs";
import { assert } from "./assert.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_div } from "./html_div.mjs";
export function app_code_refresh_function_node(parent, b) {
  let section = html_div(parent);
  if (js_node_type_is(b, "Program")) {
    let body = object_property_get(p, "body");
    each(body, (b) => {
      app_code_refresh_function_node(container, b);
    });
  } else if (js_node_type_is(b, "ImportDeclaration")) {
    let source = object_property_get(b, "source");
    let type_source = object_property_get(source, "type");
    assert(equal, [type_source, "Literal"]);
    let value = object_property_get(source, "value");
    assert(string_starts_with, [value, folder_current_prefix()]);
    let specifiers = object_property_get(b, "specifiers");
    assert(list_size_1, [specifiers]);
    let s = list_first(specifiers);
    let imported = object_property_get(s, "imported");
    let name2 = object_property_get(imported, "name");
    let local = object_property_get(s, "local");
    let name = object_property_get(local, "name");
    assert(equal, [name, name2]);
    html_code_keyword(section, js_keyword_import());
    html_span_text(section, " { ");
    let f_name = html_span_text(section, name);
    html_style_font_color(f_name, "forestgreen");
    log({
      local,
    });
    html_span_text(section, string_combine_multiple([" } "]));
    html_code_keyword(section, js_keyword_from());
    html_span_text(section, " ");
    html_code_string(section, value);
    html_span_text(section, js_code_statement_end());
  } else {
  }
}
