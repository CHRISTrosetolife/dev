import { list_wait } from "./list_wait.mjs";
import { equal } from "./equal.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { list_map } from "./list_map.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { function_contents } from "./function_contents.mjs";
import { object_properties } from "./object_properties.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function functions_source_set(contents) {
  let existing = await function_contents();
  let keys = object_properties(contents);
  let mapped = list_map(keys, async (key) => {
    let value = object_property_get(contents, key);
    return await lambda(key, value);
  });
  await list_wait(mapped);
  async function lambda(file_path, contents) {
    if (object_property_exists(existing, file_path)) {
      let contents_existing = object_property_get(existing, file_path);
      if (equal(contents, contents_existing)) {
        return;
      }
    }
    await file_overwrite(file_path, contents);
  }
}
