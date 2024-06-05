import { list_adder_visit } from "./list_adder_visit.mjs";
import { html_parse_visit_attribute_value } from "./html_parse_visit_attribute_value.mjs";
import { list_adder } from "./list_adder.mjs";
import { assert } from "./assert.mjs";
import { list_is } from "./list_is.mjs";
export function html_parse_visit_attribute_value_list(
  node,
  attribute_name,
  attribute_value,
) {
  let a = !list_is(node);
  assert(list_not_is, [node]);
  return list_adder((la) =>
    html_parse_visit_attribute_value(
      node,
      attribute_name,
      attribute_value,
      list_adder_visit(la),
    ),
  );
}
