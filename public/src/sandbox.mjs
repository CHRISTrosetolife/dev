import { folder_path_public } from "./folder_path_public.mjs";
import { folder_read_shallow } from "./folder_read_shallow.mjs";
export async function sandbox() {
  let path = folder_path_public();
  return await folder_read_shallow(path, ".html");
}
