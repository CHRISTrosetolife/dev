import { each } from "./each.mjs";
import { list_slice } from "./list_slice.mjs";
import { list_sort } from "./list_sort.mjs";
import { list_second } from "./list_second.mjs";
import { list_first } from "./list_first.mjs";
import { list_is } from "./list_is.mjs";
import { assert } from "./assert.mjs";
import { log } from "./log.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { app_code_refresh_function_selection } from "./app_code_refresh_function_selection.mjs";
import { app_code_button_menu_app } from "./app_code_button_menu_app.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_button_back_after } from "./html_button_back_after.mjs";
import { html_overlay } from "./html_overlay.mjs";
import { app_code_file_contents } from "./app_code_file_contents.mjs";
import { html_style_rounded_padded } from "./html_style_rounded_padded.mjs";
import { html_style_background_color_black } from "./html_style_background_color_black.mjs";
import { html_style } from "./html_style.mjs";
import { app_code_refresh_function_node } from "./app_code_refresh_function_node.mjs";
import { html_style_left } from "./html_style_left.mjs";
import { storage_local_recent_add } from "./storage_local_recent_add.mjs";
import { html_button } from "./html_button.mjs";
import { html_style_monospace } from "./html_style_monospace.mjs";
import { js_parse } from "./js_parse.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { storage_local_get_context } from "./storage_local_get_context.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_screen_set } from "./app_code_screen_set.mjs";
import { html_load } from "./html_load.mjs";
import { html_div } from "./html_div.mjs";
import { html_remove } from "./html_remove.mjs";
import { object_merge_strict } from "./object_merge_strict.mjs";
import { list_index } from "./list_index.mjs";
import { list_map } from "./list_map.mjs";
export async function app_code_refresh_function(context) {
  await html_load(async function () {
    let root = app_code_screen_set(
      context,
      fn_name("app_code_refresh_function"),
    );
    html_style_left(root);
    let function_selected = storage_local_get_context(
      context,
      "function_selected",
    );
    let args = {};
    let button_menu = html_button(root, "Function menu", function () {
      let overlay = html_overlay(fn_name("app_code_refresh_function"));
      html_button_back_after(
        overlay,
        string_combine_multiple(["to function: ", function_selected]),
        overlay_remove,
      );
      html_button(overlay, "Functionize selection", async function () {
        let result = app_code_refresh_function_selection(args);
        if (object_property_exists(result, "two")) {
          let two = object_property_get(result, "two");
          let ancestor_common = object_property_get(two, "ancestor_common");
          assert(list_is, [ancestor_common]);
          list_index(ancestor_common);
          let indices = list_map(two, function (t) {
            let v = list_index(ancestor_common, t);
            return v;
          });
          list_sort(indices);
          let low = list_first(indices);
          let high = list_second(indices);
          let slice = list_slice(ancestor_common, low, high + 1);
          each(slice, function (s) {});
          log({
            two,
          });
        }
      });
      app_code_button_menu_app(context, overlay, overlay_remove);
      function overlay_remove() {
        html_remove(overlay);
      }
    });
    html_style(button_menu, {
      top: 0,
      position: "sticky",
    });
    let functions_recent_limit = 15;
    storage_local_recent_add(
      context,
      "functions_recent",
      function_selected,
      functions_recent_limit,
    );
    let path = function_name_to_path(function_selected);
    let contents = await app_code_file_contents(path);
    let ast = js_parse(contents);
    let container = html_div(root);
    html_style_background_color_black(container);
    html_style_rounded_padded(container);
    html_style_monospace(container);
    app_code_refresh_function_node(
      object_merge_strict(args, {
        data: {},
        parent: container,
        node: ast,
        ast,
      }),
    );
  });
}
