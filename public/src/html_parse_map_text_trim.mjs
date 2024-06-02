import { list_join_empty } from "./list_join_empty.mjs";
import { string_trim } from "./string_trim.mjs";
import { list_map } from "./list_map.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_parse_visit } from "./html_parse_visit.mjs";
import { list_adder } from "./list_adder.mjs";
export function html_parse_map_text_trim(list) {
  assert_arguments_length(arguments, 1);
  let mapped = list_map(list, (m) => {
    return html_parse_text(m);
  });
  return mapped;
}
function html_parse_text(m) {
    let parts = list_adder((la) => html_parse_visit(m, (v) => {
        let { node } = v;
        let { type } = node;
        if (type === "text") {
            let d = object_property_get(node, "data");
            la(d);
        }
    })
    );
    return string_trim(list_join_empty(parts));
}

