import { map_properties } from "./map_properties.mjs";
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
export function app_code_refresh_function_node_identifier_add_generic(
  args,
  identifier,
  component,
) {
  let name = object_property_get(identifier, "name");
  let data = object_property_get(args, "data");
  let ids = object_property_initialize(data, "identifiers", []);
  let id_list = object_property_initialize(ids, name, []);
  list_add(id_list, component);
  let toggled = object_property_initialize(data, "toggled", {});
  object_property_set(toggled, name, false);
  let ast = object_property_get(args, "ast");
  html_on_click(component, function () {
    each(id_list, function (i) {
      object_property_get(toggled, name)
        ? html_style_background_color_transparent(i)
        : html_style_background_color(i, "darkred");
    });
    let selected = object_property_initialize(data, "selected", map_new());
    if (object_property_toggle(toggled, name)) {
      let visitor = js_visit_find(ast, identifier);
      map_set(selected, identifier, {
        visitor,
      });
      let properties = map_properties(selected);
      each(properties, each_lambda);
    } else {
      map_remove(selected, identifier);
    }
    let stack = object_property_get(v, "stack");
  });
  function each_lambda(p) {
    p + 1;
  }
}
