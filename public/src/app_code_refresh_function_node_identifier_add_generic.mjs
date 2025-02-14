import { map_size } from "./map_size.mjs";
import { html_node_text_is } from "./html_node_text_is.mjs";
import { html_element_wrap } from "./html_element_wrap.mjs";
import { app_code_refresh_function_node_identifier_add_generic_style_selected } from "./app_code_refresh_function_node_identifier_add_generic_style_selected.mjs";
import { fn_name } from "./fn_name.mjs";
import { html_data_has } from "./html_data_has.mjs";
import { html_visit } from "./html_visit.mjs";
import { html_element_get } from "./html_element_get.mjs";
import { app_code_refresh_function_node_nodes } from "./app_code_refresh_function_node_nodes.mjs";
import { list_get } from "./list_get.mjs";
import { list_index } from "./list_index.mjs";
import { list_size_2 } from "./list_size_2.mjs";
import { list_last_match } from "./list_last_match.mjs";
import { list_map } from "./list_map.mjs";
import { map_remove } from "./map_remove.mjs";
import { map_set } from "./map_set.mjs";
import { map_new } from "./map_new.mjs";
import { js_visit_find } from "./js_visit_find.mjs";
import { object_property_toggle } from "./object_property_toggle.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { html_style_background_color_transparent } from "./html_style_background_color_transparent.mjs";
import { html_style_background_color } from "./html_style_background_color.mjs";
import { each } from "./each.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { list_add } from "./list_add.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { map_properties } from "./map_properties.mjs";
import { map_get } from "./map_get.mjs";
import { list_is } from "./list_is.mjs";
export function app_code_refresh_function_node_identifier_add_generic(
  args,
  identifier,
  component,
) {
  let name = object_property_get(identifier, "name");
  let data = app_code_refresh_function_data_get(args);
  let ids = object_property_initialize(data, "identifiers", []);
  let id_list = object_property_initialize(ids, name, []);
  list_add(id_list, component);
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
      map_remove(selected, identifier);
    }
    each(id_list, function (i) {
      object_property_get(toggled, name)
        ? html_style_background_color(i, "#4c1406")
        : html_style_background_color_transparent(i);
    });
  });
  function parents(selected, styling) {
    let visitor = js_visit_find(ast, identifier);
    map_set(selected, identifier, {
      visitor,
      component,
    });
    app_code_refresh_function_selection(args, styling);
  }
}
function app_code_refresh_function_data_get(args) {
    return object_property_get(args, "data");
}

function app_code_refresh_function_selected_get(data) {
    return object_property_initialize(data, "selected", map_new());
}

function app_code_refresh_function_selection(args, on_element) {
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

