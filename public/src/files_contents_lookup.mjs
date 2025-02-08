import { list_to_lookup_key_value_property } from "./list_to_lookup_key_value_property.mjs";
import { files_contents } from "./files_contents.mjs";
export async function files_contents_lookup(paths) {
  let mapped = await files_contents(paths);
  return list_to_lookup_key_value_property(mapped, "file_path", "contents");
}
