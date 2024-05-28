import { folder_parent_exists_ensure } from "./folder_parent_exists_ensure.mjs";
let fs = await import_node("fs");
export async function file_rename(file_name_from, file_name_to) {
  await folder_parent_exists_ensure(file_name_to);
  await fs.promises.rename(file_name_from, file_name_to);
}
