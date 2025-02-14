import { app_code_refresh_function_selection } from "./app_code_refresh_function_selection.mjs";
import { app_code_refresh_function_selected_get } from "./app_code_refresh_function_selected_get.mjs";
import { app_code_refresh_function_data_get } from "./app_code_refresh_function_data_get.mjs";
import { map_size } from "./map_size.mjs";
import { app_code_refresh_function_node_identifier_add_generic_style_selected } from "./app_code_refresh_function_node_identifier_add_generic_style_selected.mjs";
import { map_remove } from "./map_remove.mjs";
import { map_set } from "./map_set.mjs";
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
    let result = app_code_refresh_function_selection(args, styling);
    if (false) {
      each(list, function (item) {});
    }
  }
}
