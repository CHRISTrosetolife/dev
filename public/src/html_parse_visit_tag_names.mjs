import { html_parse_visit_tags } from "./html_parse_visit_tags.mjs";
import { identity } from "./identity.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { list_sort_string } from "./list_sort_string.mjs";
export function html_parse_visit_tag_names(root) {
  let result = list_adder_unique((la) => {
    let lambda = (v) => {
      let { node } = v;
      let { name } = node;
      la(name);
    };
    html_parse_visit_tags(root, lambda);
  });
  list_sort_string(result, identity);
  return result;
}
