import { html_parse_visit_tag_attribute } from "./html_parse_visit_tag_attribute.mjs";
import { list_single } from "./list_single.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_adder } from "./list_adder.mjs";
export function ceb_form1(root) {
  let q = list_adder((la) => {
    let tag_name = "form";
    let attribute_name = "name";
    let attribute_value = "form1";
    html_parse_visit_tag_attribute(root, tag_name, attribute_name, lambda);
    function lambda(attribs, node) {
      if (object_property_get(attribs, attribute_name) === attribute_value) {
        la(node);
      }
    }
  });
  let q_single = list_single(q);
  let { childNodes: q_children } = q_single;
  return q_children;
}
