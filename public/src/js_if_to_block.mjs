import { each } from "./each.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function js_if_to_block(ast) {
  return js_visit_node(ast, "IfStatement", (v) => {
    let { node } = v;
    let properties = ["consequent", "alternate"];
    each(properties, (p) => {
      let value = object_property_get(node, p);
      if (value === null) {
        return;
      }
      if (value.type !== "BlockStatement") {
        let value_new = {
          type: "BlockStatement",
          body: [],
        };
      }
    });
  });
  if (0) 1;
}
