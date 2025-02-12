import { list_single } from "./list_single.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_parse_visit_tag_attribute } from "./html_parse_visit_tag_attribute.mjs";
import { list_adder } from "./list_adder.mjs";
export function html_parse_visit_tag_attribute_value(
  root,
  tag_name,
  attribute_name,
  attribute_value,
) {
  let q = list_adder((la) => {
    html_parse_visit_tag_attribute(root, tag_name, attribute_name, lambda);
    function lambda(v) {
      let { node } = v;
      let { attribs } = node;
      if (object_property_get(attribs, attribute_name) === attribute_value) {
        la(node);
      }
    }
  });
  let q_single = list_single(q);
  return q_single;
}
