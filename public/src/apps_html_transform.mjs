import { apps_paths } from "./apps_paths.mjs";
import { app_extension_html } from "./app_extension_html.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_parse_parsed } from "./html_parse_parsed.mjs";
import { file_transform } from "./file_transform.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { each_async } from "./each_async.mjs";
import { folder_path_public } from "./folder_path_public.mjs";
export async function apps_html_transform(transform) {
  let paths = await apps_paths();
  await each_async(paths, async (name) => {
    let p = folder_path_public();
    let e = app_extension_html();
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
