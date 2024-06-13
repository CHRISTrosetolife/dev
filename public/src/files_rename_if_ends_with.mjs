import { folder_read } from "./folder_read.mjs";
export async function files_rename_if_ends_with(input_path, suffix) {
  let files = await folder_read(input_path);
}
