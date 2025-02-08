import { files_contents_lookup } from "./files_contents_lookup.mjs";
import { functions_paths } from "./functions_paths.mjs";
export async function functions_source_get() {
  let paths = await functions_paths();
  return await files_contents_lookup(paths);
}
