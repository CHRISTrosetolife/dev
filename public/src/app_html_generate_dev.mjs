import { folder_current } from "./folder_current.mjs";
import { app_extension_html } from "./app_extension_html.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { folder_name_public } from "./folder_name_public.mjs";
import { path_join } from "./path_join.mjs";
import { app_html_generate_generic } from "./app_html_generate_generic.mjs";
export async function app_html_generate_dev(name) {
  await app_html_generate_generic(name, "..", (name) =>
    path_join([
      folder_current(),
      folder_name_public(),
      "dev",
      string_combine_multiple([name, app_extension_html()]),
    ]),
  );
}
