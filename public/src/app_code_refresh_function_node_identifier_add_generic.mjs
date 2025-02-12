import { js_visit } from "./js_visit.mjs";
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
  name,
  i,
) {
  let ids = object_property_get(args, "identifiers");
  let id_list = object_property_initialize(ids, name, []);
  list_add(id_list, i);
  let data = object_property_get(args, "data");
  let toggled = object_property_initialize(data, "toggled", {});
  object_property_set(toggled, name, false);
  html_on_click(i, () => {
    each(id_list, (i) =>
      object_property_get(toggled, name)
        ? html_style_background_color_transparent(i)
        : html_style_background_color(i, "darkred"),
    );
    object_property_toggle(toggled, name);
  });
  js_visit(ast, (v) => {});
}
