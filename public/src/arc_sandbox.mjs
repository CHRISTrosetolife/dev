import { string_combine } from "./string_combine.mjs";
import { folder_downloads_repository } from "./folder_downloads_repository.mjs";
import { folder_read } from "./folder_read.mjs";
export async function arc_sandbox() {
  let training = string_combine(
    folder_downloads_repository("ARC-AGI"),
    "data\\training",
  );
  return await folder_read(training);
}
