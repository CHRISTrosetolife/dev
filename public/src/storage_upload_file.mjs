import { log } from "./log.mjs";
import { storage_bucket } from "./storage_bucket.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { error } from "./error.mjs";
export async function storage_upload_file(file_path, destination) {
  if (string_starts_with(destination, "/")) {
    error();
  }
  let bucket = await storage_bucket();
  await bucket.upload(file_path, {
    destination,
  });
  log({});
}
