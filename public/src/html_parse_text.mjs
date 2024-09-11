import { html_parse_data } from "./html_parse_data.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { html_parse_visit } from "./html_parse_visit.mjs";
import { list_adder } from "./list_adder.mjs";
export function html_parse_text(element) {
  let parts = list_adder((la) =>
    html_parse_visit(element, (v) => {
      let { node } = v;
      let d = html_parse_data(node, la);
    }),
  );
  return list_join_empty(parts);
}
