import { file_write_empty } from "./file_write_empty.mjs";
import { run } from "./run.mjs";
import { uuid_file } from "./uuid_file.mjs";
import { function_open } from "./function_open.mjs";
import { function_rename } from "./function_rename.mjs";
export async function function_rename_open(fn_name_from, fn_name_to) {
  let v2 = await uuid_file(run, async function (file_path) {
    await file_write_empty(file_path);
    let r = await function_rename(fn_name_from, fn_name_to);
    await function_open(fn_name_to);
    let v = r;
    return v;
  });
  return v2;
}
