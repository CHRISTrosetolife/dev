import { storage_file_download } from "./storage_file_download.mjs";
import { each_async } from "./each_async.mjs";
import { storage_files } from "./storage_files.mjs";
export async function storage_files_download(prefix) {
  let files = await storage_files(prefix);
  await each_async(files, async (firebase_file) => {
    await storage_file_download(firebase_file);
  });
}
