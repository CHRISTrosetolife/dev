import { tautology } from "./tautology.mjs";
import { visit } from "./visit.mjs";
import { list_single } from "./list_single.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
export function ceb_form1(root) {
  let target_name = "form";
  let target_attribute_name = "name";
  let target_attribute_value = "form1";
  let lambda = (n) => {
    let { node } = n;
    let { name } = node;
    if (name === target_name) {
      let { attribs } = node;
      if (object_property_exists(attribs, target_attribute_name)) {
        if (
          object_property_get(attibs, target_attribute_name) ===
          target_attribute_value
        ) {
        }
      }
    }
  };
  visit(
    root,
    (n) => object_property_get(n, "children") || [],
    tautology,
    lambda,
    [],
  );
  let q = root("form[name=form1]");
  let q_single = list_single(q);
  let { childNodes: q_children } = q_single;
  return q_children;
}
