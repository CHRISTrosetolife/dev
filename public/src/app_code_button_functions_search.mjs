import { emoji_search } from "./emoji_search.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_code_refresh_functions_search } from "./app_code_refresh_functions_search.mjs";
import { html_button } from "./html_button.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function app_code_button_functions_search(context) {
  let root = object_property_get(context, "root");
  html_button(
    root,
    string_combine_multiple([emoji_search(), " Search functions"]),
    async function () {
      await app_code_refresh_functions_search(context);
    },
  );
}
