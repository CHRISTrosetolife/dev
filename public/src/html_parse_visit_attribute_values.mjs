import { html_parse_visit_attribute_lambda } from "./html_parse_visit_attribute_lambda.mjs";
import { equal } from "./equal.mjs";
export function html_parse_visit_attribute_values(
  root,
  attribute_name,
  values,
  lambda,
) {
  html_parse_visit_attribute_lambda(
    root,
    attribute_name,
    (actual) => equal(actual, value),
    lambda,
  );
}
