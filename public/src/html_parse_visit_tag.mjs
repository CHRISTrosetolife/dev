import { log } from "./log.mjs";
import { html_parse_visit } from "./html_parse_visit.mjs";
export function html_parse_visit_tag(root, tag_name, lambda2) {
  let lambda = (v) => {
    let { node } = v;
    let { name } = node;
    log({
      name,
    });
    if (name === tag_name) {
      lambda2(v);
    }
  };
  html_parse_visit(root, lambda);
}
