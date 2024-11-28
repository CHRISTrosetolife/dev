import { string_prefix_without } from "./string_prefix_without.mjs";
import { list_map } from "./list_map.mjs";
import { folder_path_public } from "./folder_path_public.mjs";
import { folder_read_shallow } from "./folder_read_shallow.mjs";
export async function sandbox() {
  let p = folder_path_public();
  let paths = await folder_read_shallow(p, ".html");
  return p;
  return list_map(paths, (q) => string_prefix_without(q, p));
}
