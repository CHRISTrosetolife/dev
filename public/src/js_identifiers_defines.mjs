import { log } from "./log.mjs";
import { js_function_types_is } from "./js_function_types_is.mjs";
import { js_imports_existing } from "./js_imports_existing.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { equal } from "./equal.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
import { list_is } from "./list_is.mjs";
import { js_function_types } from "./js_function_types.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_adder } from "./list_adder.mjs";
export function js_identifiers_defines(node) {
  let v = list_adder(function (la2) {
    let { type: s_type } = node;
    if (
      list_includes(
        list_concat(js_function_types(), [
          "VariableDeclaration",
          "ImportDeclaration",
        ]),
        s_type,
      )
    ) {
      identifiers_add_recursive(node);
    }
    function identifiers_add_recursive(m) {
      if (list_is(m)) {
        each(m, function (l) {
          identifiers_add_recursive(l);
        });
      } else {
        let m_type = object_property_get(m, "type");
        if (equal(m_type, "Identifier")) {
          let { name: m_name } = m;
          la2(m_name);
        } else if (equal(m_type, "ObjectPattern")) {
          let { properties } = m;
          let keys = list_map_property(properties, "value");
          identifiers_add_recursive(keys);
        } else if (equal(m_type, "ArrayPattern")) {
          let { elements } = m;
          identifiers_add_recursive(elements);
        } else if (equal(m_type, "VariableDeclaration")) {
          let { declarations } = m;
          let mapped = list_map_property(declarations, "id");
          identifiers_add_recursive(mapped);
        } else if (equal(m_type, "ImportDeclaration")) {
          let imports = js_imports_existing(m);
          identifiers_add_recursive(imports);
        } else if (js_function_types_is(m_type)) {
          let { params } = m;
          log({
            m,
          });
          identifiers_add_recursive(params);
        }
      }
    }
  });
  return v;
}
