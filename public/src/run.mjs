import { run_tokens } from "./run_tokens.mjs";
import { process_argv_remaining } from "./process_argv_remaining.mjs";
import { uuid_file } from "./uuid_file.mjs";
import { file_write } from "./file_write.mjs";
export async function run() {
  let v2 = await uuid_file(run, async function (file_path) {
    await file_write(file_path, "");
    let r = process_argv_remaining();
    let v = await run_tokens(r);
    let v3 = v;
    return v3;
  });
  return v2;
}
