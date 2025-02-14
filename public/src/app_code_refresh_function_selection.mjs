import { fn_name } from "./fn_name.mjs";
import { html_data_has } from "./html_data_has.mjs";
import { html_element_wrap } from "./html_element_wrap.mjs";
import { html_node_text_is } from "./html_node_text_is.mjs";
import { html_visit } from "./html_visit.mjs";
import { html_element_get } from "./html_element_get.mjs";
import { list_get } from "./list_get.mjs";
import { list_index } from "./list_index.mjs";
import { each } from "./each.mjs";
import { app_code_refresh_function_node_nodes } from "./app_code_refresh_function_node_nodes.mjs";
import { list_size_2 } from "./list_size_2.mjs";
import { list_is } from "./list_is.mjs";
import { list_last_match } from "./list_last_match.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { map_get } from "./map_get.mjs";
import { map_properties } from "./map_properties.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_refresh_function_selected_get } from "./app_code_refresh_function_selected_get.mjs";
import { app_code_refresh_function_data_get } from "./app_code_refresh_function_data_get.mjs";
export function app_code_refresh_function_selection(args, on_element) {
  let data = app_code_refresh_function_data_get(args);
  let selected = app_code_refresh_function_selected_get(data);
  let values = list_map(map_properties(selected), function (p) {
    let m = map_get(selected, p);
    let visitor2 = object_property_get(m, "visitor");
    let stack2 = object_property_get(visitor2, "stack");
    return stack2;
  });
  let last_matching_item = list_last_match(values);
  if (list_is(last_matching_item)) {
    if (list_size_2(values)) {
      let nodes = app_code_refresh_function_node_nodes(args);
      each(values, function (v) {
        let index = list_index(v, last_matching_item);
        let index_next = index + 1;
        let next = list_get(v, index_next);
        let m = map_get(nodes, next);
        let parent = object_property_get(m, "parent");
        on_element(parent);
        let element = html_element_get(parent);
        html_visit(element, lambda);
        function lambda(v) {
          let e = object_property_get(v, "node");
          if (html_node_text_is(e)) {
            let v2;
            return v2;
          }
          e = html_element_wrap(e);
          if (html_data_has(e, fn_name("app_code_section"))) {
            on_element(e);
          }
        }
      });
    }
  }
}
