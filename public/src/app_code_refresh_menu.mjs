import { object_property_get } from "./object_property_get.mjs";
import { app_code_refresh_app_new } from "./app_code_refresh_app_new.mjs";
import { app_code_button_html_files } from "./app_code_button_html_files.mjs";
import { html_load } from "./html_load.mjs";
import { app_code_refresh_functions_recent } from "./app_code_refresh_functions_recent.mjs";
import { app_code_functions_recent_get } from "./app_code_functions_recent_get.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { html_button } from "./html_button.mjs";
import { app_code_button_functions_search } from "./app_code_button_functions_search.mjs";
import { app_code_screen_set } from "./app_code_screen_set.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_username_get } from "./app_code_username_get.mjs";
import { app_code_username_exists } from "./app_code_username_exists.mjs";
import { app_code_refresh_main } from "./app_code_refresh_main.mjs";
import { storage_local_remove } from "./storage_local_remove.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_code_refresh_username } from "./app_code_refresh_username.mjs";
export async function app_code_refresh_menu(context) {
  await html_load(async function () {
    let root = app_code_screen_set(context, fn_name("app_code_refresh_menu"));
    app_code_button_functions_search(context);
    let functions_recent = app_code_functions_recent_get(context);
    if (list_empty_not_is(functions_recent)) {
      html_button(root, "Recent functions", function () {
        app_code_refresh_functions_recent(context);
      });
    }
    html_button(root, "New app", async function () {
      await app_code_refresh_app_new(context);
    });
    await app_code_button_html_files(context);
    if (app_code_username_exists(context)) {
      html_button(
        root,
        string_combine_multiple(["Log out: ", app_code_username_get(context)]),
        async function () {
          let app_fn = object_property_get(context, "app_fn");
          storage_local_remove(app_fn, "username");
          await app_code_refresh_main(context);
        },
      );
    } else {
      html_button(root, "Log in", function () {
        app_code_refresh_username(context);
      });
    }
  });
}
