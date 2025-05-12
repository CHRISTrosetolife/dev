import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { html_parse_visit } from "./html_parse_visit.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { undefined_not_is } from "./undefined_not_is.mjs";
export function html_parse_visit_attribute(root, attribute_name, lambda) {
  assert_arguments_length(arguments, 3);
  function lambda_inner(v) {
    let { node } = v;
    let { attribs } = node;
    if (
      undefined_not_is(attribs) &&
      object_property_exists(attribs, attribute_name)
    ) {
      lambda(v);
    }
  }
  html_parse_visit(root, lambda_inner);
}
