import { files_contents } from "./files_contents.mjs";
import { functions_paths } from "./functions_paths.mjs";
export async function functions_contents() {
  let paths = await functions_paths();
  return files_contents(paths);
}
