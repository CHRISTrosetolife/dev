import { folder_path_src } from "./folder_path_src.mjs";
import { folder_read_shallow } from "./folder_read_shallow.mjs";
export async function sandbox() {
  return await folder_read_shallow(folder_path_src(), ".html");
}
