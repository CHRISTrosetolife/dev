import { html_parse_visit } from "./html_parse_visit.mjs";
export function html_parse_visit_tag(root, lambda2, target_name) {
  let lambda = (v) => {
    let { node } = v;
    let { name } = node;
    if (name === target_name) {
      lambda2(v);
    }
  };
  html_parse_visit(root, lambda);
}
