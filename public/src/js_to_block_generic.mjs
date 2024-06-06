import { object_property_set } from "./object_property_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
export function js_to_block_generic(node, properties) {
  each(properties, (p) => {
    let value = object_property_get(node, p);
    if (value === null) {
      return;
    }
    let { type } = value;
    if (type !== "BlockStatement") {
      let value_new = {
        type: "BlockStatement",
        body: [value],
      };
      object_property_set(node, p, value_new);
    }
  });
}
