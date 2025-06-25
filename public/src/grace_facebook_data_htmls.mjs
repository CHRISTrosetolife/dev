import { folder_read } from "./folder_read.mjs";
export async function grace_facebook_data_htmls() {
  let v = await folder_read("D:/g", ".html");
  return v;
}
