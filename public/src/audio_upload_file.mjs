import { storage_upload_file } from "./storage_upload_file.mjs";
import { folder_gitignore_path } from "./folder_gitignore_path.mjs";
export async function audio_upload_file(file_path) {
  let output_path = folder_gitignore_path(file_path);
  await storage_upload_file(output_path, file_path);
}
