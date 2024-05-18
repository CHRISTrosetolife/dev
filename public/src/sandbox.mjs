import { folder_read } from "./folder_read.mjs";
import { list_filter } from "./list_filter.mjs";
export async function sandbox() {
  let path = "C:\\Users\\JESUS\\Downloads\\yyy8Uu-master\\yyy8Uu-master";
  let files = await folder_read(path, ".xml");
  let filtered = list_filter(files, "\\cod-");
  return filtered;
}
