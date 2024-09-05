import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
export async function folder_parent_exists_ensure(file_name) {
  let path = await import("path");
  let parent = path.dirname(file_name);
  await folder_exists_ensure(parent);
}
