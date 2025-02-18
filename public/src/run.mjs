import { file_write_empty } from "./file_write_empty.mjs";
import { run_tokens } from "./run_tokens.mjs";
import { process_argv_remaining } from "./process_argv_remaining.mjs";
import { uuid_file } from "./uuid_file.mjs";
export async function run() {
  let v2 = await uuid_file(run, async function (file_path) {
    await file_write_empty(file_path);
    let r = process_argv_remaining();
    let v = await run_tokens(r);
    let v3 = v;
    return v3;
  });
  return v2;
}
