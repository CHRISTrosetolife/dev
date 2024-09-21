import { folder_read } from "./folder_read.mjs";
import { sermon_folder } from "./sermon_folder.mjs";
export async function sermons() {
  return await folder_read(sermon_folder(), ".txt");
}
