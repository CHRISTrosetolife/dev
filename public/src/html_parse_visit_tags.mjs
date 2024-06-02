import { html_parse_visit } from "./html_parse_visit.mjs";
export function html_parse_visit_tags(root, lambda3) {
  let lambda_inner = (v) => {
    let { node } = v;
    if (node.type !== "tag") {
      return;
    }
    lambda3(v);
  };
  html_parse_visit(root, lambda_inner);
}
