import { log } from "./log.mjs";
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
  let toggled = false;
  html_on_click(i, () => {
    each(id_list, (i) =>
      toggled
        ? html_style_background_color(i, "transparent")
        : html_style_background_color(i, "darkred"),
    );
    toggled = !toggled;
    log({
      toggled,
    });
  });
}
