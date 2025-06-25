import { folder_external_root } from "./folder_external_root.mjs";
import { folder_read } from "./folder_read.mjs";
export async function grace_facebook_data_htmls() {
  let v = await folder_read(folder_external_root("g"), ".html");
  return v;
}
