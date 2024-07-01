import { storage_files } from "./storage_files.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function storage_files_names(prefix) {
  let files = await storage_files(prefix, result);
  let result = list_map_property(files, "name");
  return result;
}
