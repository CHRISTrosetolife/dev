import { html_parse_visit } from "./html_parse_visit.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
export function html_parse_visit_attribute(
  root,
  tag_name,
  attribute_name,
  lambda,
) {
  function lambda_inner(v) {
    let { node } = v;
    let { attribs } = node;
    if (object_property_exists(attribs, attribute_name)) {
      lambda(v);
    }
  }
  html_parse_visit(root, lambda_inner);
}
