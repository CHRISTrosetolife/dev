import { app_extension_html_combine } from "./app_extension_html_combine.mjs";
import { html_parse_unparse } from "./html_parse_unparse.mjs";
import { apps_paths } from "./apps_paths.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_parse_parsed } from "./html_parse_parsed.mjs";
import { file_transform } from "./file_transform.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { each_async } from "./each_async.mjs";
import { folder_path_public } from "./folder_path_public.mjs";
export async function apps_html_transform(transform) {
  let paths = await apps_paths();
  await each_async(paths, async function (name) {
    let p = folder_path_public();
    let test_path = app_extension_html_combine(
      string_combine_multiple([p, name]),
    );
    await file_transform(
      async function (text) {
        let r = await html_parse_parsed(text);
        let parsed = object_property_get(r, "parsed");
        let root = object_property_get(r, "root");
        await transform(root, name, parsed);
        let u = html_parse_unparse(parsed);
        return u;
      },
      test_path,
      [],
    );
  });
  return paths;
}
