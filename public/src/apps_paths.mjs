import { string_suffix_without } from "./string_suffix_without.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
import { string_slash_normalize_right } from "./string_slash_normalize_right.mjs";
import { list_map } from "./list_map.mjs";
import { folder_read_shallow } from "./folder_read_shallow.mjs";
import { app_extension_html } from "./app_extension_html.mjs";
import { folder_path_public } from "./folder_path_public.mjs";
import { list_filter } from "./list_filter.mjs";
export async function apps_paths() {
  let p = folder_path_public();
  let e = app_extension_html();
  let paths = await folder_read_shallow(p, e);
  paths = list_map(paths, string_slash_normalize_right);
  paths = list_map(paths, (q) => string_prefix_without(q, p));
  paths = list_map(paths, (q) => string_suffix_without(q, e));
  paths = list_filter(paths, (p) => p !== "404");
  return paths;
}
