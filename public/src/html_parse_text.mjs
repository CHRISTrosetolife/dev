import { list_join_empty } from "./list_join_empty.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_parse_visit } from "./html_parse_visit.mjs";
import { list_adder } from "./list_adder.mjs";
export function html_parse_text(element) {
  let parts = list_adder((la) =>
    html_parse_visit(element, (v) => {
      let { node } = v;
      let { type } = node;
      if (type === "text") {
        let d = object_property_get(node, "data");
        la(d);
      }
    }),
  );
  return list_join_empty(parts);
}
