import { list_adder_visit } from "./list_adder_visit.mjs";
import { html_parse_visit_attribute_values } from "./html_parse_visit_attribute_values.mjs";
import { list_adder } from "./list_adder.mjs";
export function html_parse_visit_attribute_values_list(
  root,
  attribute_name,
  attribute_values,
) {
  return list_adder((la) =>
    html_parse_visit_attribute_values(
      root,
      attribute_name,
      attribute_values,
      list_adder_visit(la),
    ),
  );
}
