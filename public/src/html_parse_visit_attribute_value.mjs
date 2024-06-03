import { html_parse_visit_attribute_lambda } from "./html_parse_visit_attribute_lambda.mjs";
import { equal } from "./equal.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function html_parse_visit_attribute_value(
  root,
  attribute_name,
  value,
  lambda,
) {
  function lambda_inner(v) {
    let { node } = v;
    let { attribs } = node;
    let actual = object_property_get(attribs, attribute_name);
    if (equal(actual, value)) {
      lambda(v);
    }
  }
  html_parse_visit_attribute_lambda(root, attribute_name, lambda_inner);
}
