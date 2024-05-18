import { folder_read } from "./folder_read.mjs";
export async function sandbox() {
  let path = "C:\\Users\\JESUS\\Downloads\\yyy8Uu-master\\yyy8Uu-master";
  return await folder_read(path, 'xml');
}
