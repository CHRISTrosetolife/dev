import { fn_name } from "./fn_name.mjs";
import { html_data_has } from "./html_data_has.mjs";
import { html_element_wrap } from "./html_element_wrap.mjs";
import { html_node_text_is } from "./html_node_text_is.mjs";
import { html_visit } from "./html_visit.mjs";
import { html_element_get } from "./html_element_get.mjs";
import { map_get } from "./map_get.mjs";
import { app_code_refresh_function_node_nodes } from "./app_code_refresh_function_node_nodes.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { app_code_refresh_function_selection } from "./app_code_refresh_function_selection.mjs";
import { map_set } from "./map_set.mjs";
import { js_visit_find } from "./js_visit_find.mjs";
import { html_style_background_color } from "./html_style_background_color.mjs";
import { each } from "./each.mjs";
import { map_remove } from "./map_remove.mjs";
import { html_style_background_color_transparent } from "./html_style_background_color_transparent.mjs";
import { app_code_refresh_function_node_identifier_add_generic_style_selected } from "./app_code_refresh_function_node_identifier_add_generic_style_selected.mjs";
import { map_size } from "./map_size.mjs";
import { object_property_toggle } from "./object_property_toggle.mjs";
import { app_code_refresh_function_selected_get } from "./app_code_refresh_function_selected_get.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { list_add } from "./list_add.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { app_code_refresh_function_data_get } from "./app_code_refresh_function_data_get.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function app_code_refresh_function_node_selectable_add(
  node,
  args,
  data_property_name,
  component,
  key,
) {
  let name = object_property_get(node, "name");
  let data = app_code_refresh_function_data_get(args);
  let nodes = object_property_initialize(data, data_property_name, []);
  let nodes_list = object_property_initialize(nodes, name, []);
  list_add(nodes_list, component);
  let toggled = object_property_initialize(data, "toggled", {});
  object_property_set(toggled, name, false);
  let ast = object_property_get(args, "ast");
  html_on_click(component, function () {
    let selected = app_code_refresh_function_selected_get(data);
    if (object_property_toggle(toggled, name)) {
      if (map_size(selected) >= 2) {
        let v3;
        return v3;
      }
      parents(
        selected,
        app_code_refresh_function_node_identifier_add_generic_style_selected,
      );
    } else {
      parents(selected, html_style_background_color_transparent);
      map_remove(selected, node);
    }
    each(nodes_list, function (i) {
      object_property_get(toggled, name)
        ? html_style_background_color(i, "#4c1406")
        : html_style_background_color_transparent(i);
    });
  });
  function parents(selected, styling) {
    let visitor = js_visit_find(ast, node);
    map_set(selected, node, {
      visitor,
      component,
    });
    let result = app_code_refresh_function_selection(args, styling);
    if (object_property_exists(result, "two")) {
      let two = object_property_get(result, "two");
      let nodes = app_code_refresh_function_node_nodes(args);
      each(two, function (next) {
        let m = map_get(nodes, next);
        let parent = object_property_get(m, "parent");
        styling(parent);
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
            styling(e);
          }
        }
      });
    }
  }
}
