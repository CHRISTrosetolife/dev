import { app_prefix_combine } from "./app_prefix_combine.mjs";
import { js_string } from "./js_string.mjs";
import { js_expression_call_args } from "./js_expression_call_args.mjs";
import { js_node_type_literal_is } from "./js_node_type_literal_is.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { js_node_type_identifier_is } from "./js_node_type_identifier_is.mjs";
import { list_filter_js_node_type_is } from "./list_filter_js_node_type_is.mjs";
import { each } from "./each.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_transform } from "./function_transform.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
import { string_is } from "./string_is.mjs";
export async function app_index_choices_migrate() {
  await function_transform(fn_name("app_index_choices"), function (ast) {
    js_visit_node(ast, "ObjectExpression", function (v) {
      let node = object_property_get(v, "node");
      let properties = object_property_get(node, "properties");
      let filtered = list_filter_js_node_type_is(properties, "Property");
      each(filtered, function (p) {
        let key = object_property_get(p, "key");
        let value = object_property_get(p, "value");
        if (js_node_type_literal_is(value)) {
          let value2 = object_property_get(value, "value");
          if (string_is(value2)) {
            if (js_node_type_identifier_is(key)) {
              let name = object_property_get(key, "name");
              if (name === "page") {
                object_property_set(key, "name", "app");
                object_property_set(
                  p,
                  "value",
                  js_expression_call_args(fn_name("fn_name"), [
                    js_string(app_prefix_combine(value2)),
                  ]),
                );
              }
            }
          }
        }
      });
    });
  });
}
