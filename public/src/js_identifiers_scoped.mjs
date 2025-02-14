import { equal } from "./equal.mjs";
import { js_function_types_is } from "./js_function_types_is.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { add_1 } from "./add_1.mjs";
import { list_take } from "./list_take.mjs";
import { list_index } from "./list_index.mjs";
import { list_after_or } from "./list_after_or.mjs";
import { list_after } from "./list_after.mjs";
import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
export function js_identifiers_scoped(visitor, node) {
  let { stack } = visitor;
  let names = list_adder(function (la) {
    each(stack, function (s) {
      let { type: s_type } = s;
      if (s_type === "BlockStatement") {
        let list = list_after(stack, s);
        let item = list_after_or(stack, list, node);
        let index = list_index(list, item);
        let taken = list_take(list, add_1(index));
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
      } else {
        if (js_function_types_is(s_type)) {
          let { params } = s;
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
          }
        });
      }
    });
  });
  return names;
}
