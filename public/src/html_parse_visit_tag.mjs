import { html_parse_visit_tags } from "./html_parse_visit_tags.mjs";
export function html_parse_visit_tag(root, tag_name, lambda2) {
  html_parse_visit_tags(root, lambda);
  function lambda(v) {
    let { node } = v;
    let { name } = node;
    if (name === tag_name) {
      lambda2(v);
    }
  }
}
