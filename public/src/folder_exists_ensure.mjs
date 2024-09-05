import { folder_new } from "./folder_new.mjs";
import { folder_parent_exists_ensure } from "./folder_parent_exists_ensure.mjs";
import { file_exists } from "./file_exists.mjs";
export async function folder_exists_ensure(parent) {
  if (!(await file_exists(parent))) {
    await folder_parent_exists_ensure(parent);
    await folder_new(parent);
  }
}
