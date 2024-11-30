import { app_extension } from "./app_extension.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_parse_parsed } from "./html_parse_parsed.mjs";
import { file_transform } from "./file_transform.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { each_async } from "./each_async.mjs";
import { string_suffix_without } from "./string_suffix_without.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
import { string_slash_normalize_right } from "./string_slash_normalize_right.mjs";
import { list_map } from "./list_map.mjs";
import { folder_read_shallow } from "./folder_read_shallow.mjs";
import { folder_path_public } from "./folder_path_public.mjs";
export async function apps_html_transform(transform) {
  let p = folder_path_public();
  let e = app_extension();
  let paths = await folder_read_shallow(p, e);
  paths = list_map(paths, string_slash_normalize_right);
  paths = list_map(paths, (q) => string_prefix_without(q, p));
  paths = list_map(paths, (q) => string_suffix_without(q, e));
  await each_async(paths, async (name) => {
    let test_path = string_combine_multiple([p, name, e]);
    await file_transform(
      async (text) => {
        let r = await html_parse_parsed(text);
        let parsed = object_property_get(r, "parsed");
        let root = object_property_get(r, "root");
        transform(root, name);
        return parsed.html();
      },
      test_path,
      [],
    );
  });
  return paths;
}
