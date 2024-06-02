import { html_parse_visit_tags } from "./html_parse_visit_tags.mjs";
export function html_parse_visit_tag(root, tag_name, lambda) {
  html_parse_visit_tags(root, lambda_inner);
  function lambda_inner(v) {
    let { node } = v;
    let { name } = node;
    if (name === tag_name) {
      lambda(v);
    }
  }
}
