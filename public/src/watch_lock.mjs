import { web_is } from "./web_is.mjs";
import { file_write_empty } from "./file_write_empty.mjs";
import { uuid_file } from "./uuid_file.mjs";
export async function watch_lock(lambda) {
  if (web_is()) {
    let v = await lambda();
    return v;
  }
  let v2 = await uuid_file(watch_lock, async function (file_path) {
    await file_write_empty(file_path);
    let v = await lambda();
    return v;
  });
  return v2;
}
