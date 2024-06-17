import { folder_new } from "./folder_new.mjs";
import { file_exists } from "./file_exists.mjs";
export async function folder_parent_exists_ensure(file_name) {
  let path = await import("path");
  let parent = path.dirname(file_name);
  if (!(await file_exists(parent))) {
    await folder_parent_exists_ensure(parent);
    await folder_new(parent);
  }
}
