import { file_transform } from "./file_transform.mjs";
import { each_async } from "./each_async.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { file_read } from "./file_read.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_parse_parsed } from "./html_parse_parsed.mjs";
import { string_suffix_without } from "./string_suffix_without.mjs";
import { string_slash_normalize_right } from "./string_slash_normalize_right.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
import { list_map } from "./list_map.mjs";
import { folder_path_public } from "./folder_path_public.mjs";
import { folder_read_shallow } from "./folder_read_shallow.mjs";
export async function sandbox() {
  let p = folder_path_public();
  let e = ".html";
  let paths = await folder_read_shallow(p, e);
  paths = list_map(paths, string_slash_normalize_right);
  paths = list_map(paths, (q) => string_prefix_without(q, p));
  paths = list_map(paths, (q) => string_suffix_without(q, e));
  await each_async(paths, async (q) => {
    let test_path = string_combine_multiple([p, q, e]);
    let html = await file_read(test_path);
    let r = await html_parse_parsed(html);
    let parsed = object_property_get(r, "parsed");
    await file_transform();
  });
  return paths;
}
