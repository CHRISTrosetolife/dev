import { error } from "./error.mjs";
import { log } from "./log.mjs";
import { each } from "./each.mjs";
import { string_combine } from "./string_combine.mjs";
import { folder_downloads_repository } from "./folder_downloads_repository.mjs";
import { folder_read } from "./folder_read.mjs";
export async function arc_sandbox() {
  let training = string_combine(
    folder_downloads_repository("ARC-AGI"),
    "data\\training",
  );
  let files = await folder_read(training, ".json");
  each(files, (file) => {
    log({
      file,
    });
    error();
  });
}
