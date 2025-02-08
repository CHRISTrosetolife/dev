import { list_to_lookup_key_value_property } from "./list_to_lookup_key_value_property.mjs";
import { functions_contents } from "./functions_contents.mjs";
export async function functions_source_get() {
  let mapped = await functions_contents();
  return list_to_lookup_key_value_property(mapped, "file_path", "contents");
}
