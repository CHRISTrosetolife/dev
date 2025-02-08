import { functions_paths } from "./functions_paths.mjs";
import { list_wait } from "./list_wait.mjs";
import { file_read } from "./file_read.mjs";
import { list_map } from "./list_map.mjs";
export async function functions_contents() {
  let paths = await functions_paths();
  let mapped = list_map(paths, async (file_path) => {
    return {
      file_path,
      contents: await file_read(file_path),
    };
  });
  return await list_wait(mapped);
}
