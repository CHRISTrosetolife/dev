import { file_overwrite } from "./file_overwrite.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { sermon_path } from "./sermon_path.mjs";
export async function sermon_overwrite(name, lines) {
  let sermon_path_file = sermon_path(name);
  let text = list_join_space(lines);
  await file_overwrite(sermon_path_file, text);
}
