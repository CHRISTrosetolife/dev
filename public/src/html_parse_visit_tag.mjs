import { html_parse_visit } from "./html_parse_visit.mjs";
export function html_parse_visit_tag(root, tag_name, lambda2) {
  html_parse_visit_tags(root,lambda3);
  function lambda3(v) {
    let { node } = v;
    let { name } = node;
    if (name === tag_name) {
      lambda2(v);
    }
  }
}
function html_parse_visit_tags(root,lambda3) {
    let lambda = (v) => {
        let { node } = v;
        if (node.type !== "tag") {
            return;
        }
        lambda3(v);
    };
    html_parse_visit(root, lambda);
}

