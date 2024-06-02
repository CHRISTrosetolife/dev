import { html_parse_visit_tag } from "./html_parse_visit_tag.mjs";
import { list_single } from "./list_single.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { list_adder } from "./list_adder.mjs";
export function ceb_form1(root) {
  list_adder((la) => {
    let target_name = "form";
    let target_attribute_name = "name";
    let target_attribute_value = "form1";
    function lambda2(v) {
      let { node } = v;
      let { attribs } = node;
      if (object_property_exists(attribs, target_attribute_name)) {
        if (
          object_property_get(attribs, target_attribute_name) ===
          target_attribute_value
        ) {
          la(node);
        }
      }
    }
    html_parse_visit_tag(root, target_name, lambda2);
  });
  let q = root("form[name=form1]");
  let q_single = list_single(q);
  let { childNodes: q_children } = q_single;
  return q_children;
}
