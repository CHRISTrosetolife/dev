import { html_parse_visit_attribute_lambda } from "./html_parse_visit_attribute_lambda.mjs";
import { list_includes } from "./list_includes.mjs";
export function html_parse_visit_attribute_values(
  root,
  attribute_name,
  values,
  lambda,
) {
  html_parse_visit_attribute_lambda(
    root,
    attribute_name,
    (actual) => list_includes(values, actual),
    lambda,
  );
}
