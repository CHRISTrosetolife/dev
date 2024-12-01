import { app_html_generate_generic } from "./app_html_generate_generic.mjs";
import { app_html_path } from "./app_html_path.mjs";
import { folder_current } from "./folder_current.mjs";
export async function app_html_generate(name) {
  let output_path_get = app_html_path;
  let folder = folder_current();
  await app_html_generate_generic(name, folder, output_path_get);
}
