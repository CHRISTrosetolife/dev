import { folder_external_root_combine } from "./folder_external_root_combine.mjs";
import { folder_read } from "./folder_read.mjs";
export async function grace_facebook_data_htmls() {
  let v = await folder_read(folder_external_root_combine("g"), ".html");
  return v;
}
