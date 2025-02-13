import { list_all } from "./list_all.mjs";
import { list_get } from "./list_get.mjs";
import { each_index } from "./each_index.mjs";
import { list_map } from "./list_map.mjs";
import { log } from "./log.mjs";
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
import { list_first_remaining } from "./list_first_remaining.mjs";
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
      let values = list_map(map_properties(selected), function (p) {
        let m = map_get(selected, p);
        let visitor2 = object_property_get(m, "visitor");
        let stack2 = object_property_get(visitor2, "stack");
        return stack2;
      });
      let fr = list_first_remaining(values);
      let first = object_property_get(fr, "first");
      let remaining = object_property_get(fr, "remaining");
      let last_matching = null;
      each_index(first, function (item, index) {
        let all_match = list_all(remaining, function (r) {
          let item2 = list_get(r, index);
          let v2 = item2 === item;
          return v2;
        });
        if (all_match) {
          last_matching = index;
        } else {
          let v3 = true;
          return v3;
        }
      });
      log({
        last_matching,
        first,
      });
    } else {
      map_remove(selected, identifier);
    }
  });
  function each_lambda(p) {
    p + 1;
  }
}
