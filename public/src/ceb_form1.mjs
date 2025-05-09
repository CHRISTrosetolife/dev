import { html_parse_visit_tag_attribute_value } from "./html_parse_visit_tag_attribute_value.mjs";
export function ceb_form1(root) {
  let tag_name = "form";
  let attribute_name = "name";
  let attribute_value = "form1";
  let form1 = html_parse_visit_tag_attribute_value(
    root,
    tag_name,
    attribute_name,
    attribute_value,
  );
  let { childNodes: children } = form1;
  return {
    children,
    form1,
  };
}
