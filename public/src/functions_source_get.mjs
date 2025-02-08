import { files_contents } from "./files_contents.mjs";
import { functions_paths } from "./functions_paths.mjs";
import { list_to_lookup_key_value_property } from "./list_to_lookup_key_value_property.mjs";
export async function functions_source_get() {
  let paths = await functions_paths();
  let mapped = await files_contents(paths);
  return list_to_lookup_key_value_property(mapped, "file_path", "contents");
}
