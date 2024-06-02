import { html_parse_visit } from "./html_parse_visit.mjs";
export function html_parse_visit_tag_names(root, tag_name, lambda2) {
  let lambda = (v) => {
    let { node } = v;
    let { name } = node;
    if (name === tag_name) {
      lambda2(v);
    }
  };
  html_parse_visit(root, lambda);
}
