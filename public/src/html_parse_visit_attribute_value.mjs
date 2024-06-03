import { html_parse_visit_attribute_lambda } from "./html_parse_visit_attribute_lambda.mjs";
import { equal } from "./equal.mjs";
export function html_parse_visit_attribute_value(
  root,
  attribute_name,
  value,
  lambda,
) {
  html_parse_visit_attribute_lambda(
    root,
    attribute_name,
    (actual) => equal(actual, value),
    lambda_inner,
  );
}
