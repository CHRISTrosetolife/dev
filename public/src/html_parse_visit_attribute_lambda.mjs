import { html_parse_visit_attribute } from "./html_parse_visit_attribute.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function html_parse_visit_attribute_lambda(
  root,
  attribute_name,
  attribute_lambda,
  lambda,
) {
  function lambda_inner(v) {
    let { node } = v;
    let { attribs } = node;
    let actual = object_property_get(attribs, attribute_name);
    if (attribute_lambda(actual)) {
      lambda(v);
    }
  }
  html_parse_visit_attribute(root, attribute_name, lambda_inner);
}
