import { html_parse_visit_tags } from "./html_parse_visit_tags.mjs";
import { list_adder } from "./list_adder.mjs";
export function html_parse_visit_tag_names(root, tag_name, lambda2) {
  return list_adder((la) => {
    let lambda = (v) => {
      let { node } = v;
      let { name } = node;
      if (name === tag_name) {
        lambda2(v);
      }
    };
    html_parse_visit_tags(root, lambda);
  });
}
