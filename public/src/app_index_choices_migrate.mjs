import { object_property_get } from "./object_property_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_transform } from "./function_transform.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
export async function app_index_choices_migrate() {
  await function_transform(fn_name("app_index_choices"), function (ast) {
    js_visit_node(ast, "ObjectExpression", function (v) {
      let node = object_property_get(v, "node");
      let properties = object_property_get(node, "properties");
      let key = object_property_get(properties, "key");
      let value = object_property_get(properties, "value");
      if (false) {
      }
    });
  });
}
