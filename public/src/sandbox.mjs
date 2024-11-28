import { folder_path_public } from "./folder_path_public.mjs";
import { folder_read_shallow } from "./folder_read_shallow.mjs";
export async function sandbox() {
  return await folder_read_shallow(folder_path_public(), ".html");
}
