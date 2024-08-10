import { tautology } from "./tautology.mjs";
import { retry } from "./retry.mjs";
import { string_replace } from "./string_replace.mjs";
import { storage_bucket } from "./storage_bucket.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { error } from "./error.mjs";
export async function storage_upload_file(file_path, destination) {
  destination = string_replace(destination, "\\", "/");
  if (string_starts_with(destination, "/")) {
    error();
  }
  let bucket = await storage_bucket();
  await retry(
    3,
    async () =>
      await bucket.upload(file_path, {
        destination,
      }),
    tautology,
  );
}
