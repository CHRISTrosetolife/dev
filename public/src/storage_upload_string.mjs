import { uuid_file } from "./uuid_file.mjs";
import { storage_upload_file } from "./storage_upload_file.mjs";
import { file_write } from "./file_write.mjs";
export async function storage_upload_string(string, destination) {
  await uuid_file(storage_upload_string, async (file_path) => {
    await file_write(file_path, string);
    await storage_upload_file(file_path, destination);
  });
}
