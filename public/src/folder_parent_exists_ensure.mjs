import { folder_parent } from "./folder_parent.mjs";
import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
export async function folder_parent_exists_ensure(file_name) {
  if (false) {
  }
  let parent = await folder_parent(file_name);
  await folder_exists_ensure(parent);
}
