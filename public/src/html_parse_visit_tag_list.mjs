import { list_adder_visit } from "./list_adder_visit.mjs";
import { html_parse_visit_tag } from "./html_parse_visit_tag.mjs";
import { list_adder } from "./list_adder.mjs";
export function html_parse_visit_tag_list(parsed, tag_name) {
  return list_adder((la) => {
    html_parse_visit_tag(parsed, tag_name, list_adder_visit(la));
  });
}
