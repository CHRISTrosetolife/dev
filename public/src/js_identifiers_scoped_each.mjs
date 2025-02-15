import { equal } from "./equal.mjs";
import { js_function_types_is } from "./js_function_types_is.mjs";
import { js_imports_existing } from "./js_imports_existing.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { each } from "./each.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_take } from "./list_take.mjs";
import { list_index } from "./list_index.mjs";
import { list_after_or } from "./list_after_or.mjs";
import { list_after } from "./list_after.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_index_last } from "./list_index_last.mjs";
export function js_identifiers_scoped_each(visitor, stack_item) {
  let names = list_adder(function (la) {
    let { stack, node } = visitor;
    let { type: s_type } = stack_item;
    if (list_includes(["BlockStatement", "Program"], s_type)) {
      if (
        list_includes(stack, stack_item) &&
        list_index(stack, stack_item) < list_index_last(stack) - 1
      ) {
        let list = list_after(stack, stack_item);
        let item = list_after_or(stack, list, node);
        let index = list_index(list, item);
        let taken = list_take(list, index);
        let filtered = list_filter_property(
          taken,
          "type",
          "VariableDeclaration",
        );
        each(filtered, function (f) {
          let { declarations } = f;
          let mapped = list_map_property(declarations, "id");
          identifiers_add(mapped);
        });
        let filtered2 = list_filter_property(
          taken,
          "type",
          "ImportDeclaration",
        );
        let imports = list_map(filtered2, js_imports_existing);
        each(imports, function (item2) {
          identifiers_add(item2);
        });
      }
    } else {
      if (js_function_types_is(s_type)) {
        let { params } = stack_item;
        identifiers_add(params);
      }
    }
    function identifiers_add(list) {
      each(list, function (m) {
        let { type: m_type } = m;
        if (equal(m_type, "Identifier")) {
          let { name: m_name } = m;
          la(m_name);
        } else if (equal(m_type, "ObjectPattern")) {
          let { properties } = m;
          let keys = list_map_property(properties, "value");
          identifiers_add(keys);
        } else if (equal(m_type, "ArrayPattern")) {
          let { elements } = m;
          identifiers_add(elements);
        } else if (equal(m_type, "VariableDeclaration")) {
          let { declarations } = f;
          let mapped = list_map_property(declarations, "id");
          identifiers_add(mapped);
        }
      });
    }
  });
  return names;
}
