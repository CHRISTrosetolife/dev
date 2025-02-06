import { js_keyword_function } from "./js_keyword_function.mjs";
import { js_keyword_export } from "./js_keyword_export.mjs";
import { html_code_identifier_fn } from "./html_code_identifier_fn.mjs";
import { html_code_keyword_space } from "./html_code_keyword_space.mjs";
import { log } from "./log.mjs";
import { each } from "./each.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_code_statement_end } from "./js_code_statement_end.mjs";
import { html_code_string } from "./html_code_string.mjs";
import { js_keyword_from } from "./js_keyword_from.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { js_keyword_import } from "./js_keyword_import.mjs";
import { list_first } from "./list_first.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { folder_current_prefix } from "./folder_current_prefix.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { equal } from "./equal.mjs";
import { assert } from "./assert.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_div } from "./html_div.mjs";
export function app_code_refresh_function_node(parent, node) {
  if (js_node_type_is(node, "Program")) {
    let body = object_property_get(node, "body");
    each(body, (b) => {
      let section = html_div(parent);
      app_code_refresh_function_node(section, b);
    });
  } else if (js_node_type_is(node, "ImportDeclaration")) {
    let source = object_property_get(node, "source");
    let type_source = object_property_get(source, "type");
    assert(equal, [type_source, "Literal"]);
    let value = object_property_get(source, "value");
    assert(string_starts_with, [value, folder_current_prefix()]);
    let specifiers = object_property_get(node, "specifiers");
    assert(list_size_1, [specifiers]);
    let s = list_first(specifiers);
    let imported = object_property_get(s, "imported");
    let name2 = object_property_get(imported, "name");
    let local = object_property_get(s, "local");
    let name = object_property_get(local, "name");
    assert(equal, [name, name2]);
    html_code_keyword_space(parent, js_keyword_import());
    html_span_text(parent, "{ ");
    html_code_identifier_fn(parent, name);
    html_span_text(parent, " } ");
    html_code_keyword_space(parent, js_keyword_from());
    html_code_string(parent, value);
    html_span_text(parent, js_code_statement_end());
  } else if (js_node_type_is(node, "ExportNamedDeclaration")) {
    html_code_keyword_space(parent, js_keyword_export());
    let declaration = object_property_get(node, "declaration");
    app_code_refresh_function_node(parent, declaration);
  } else if (js_node_type_is(node, "FunctionDeclaration")) {
    html_code_keyword_space(parent, js_keyword_function());
    let body2 = object_property_get(node, "body");
    let id = object_property_get(node, "id");
    let name3 = object_property_get(id, "name");
    html_code_identifier_fn(parent, name3);
    html_span_text(parent, "( ");
    log({
      node,
    });
  } else {
    log({
      node,
    });
  }
}
