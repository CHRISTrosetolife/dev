import { run_tokens } from "./run_tokens.mjs";
import { process_argv_remaining } from "./process_argv_remaining.mjs";
import { uuid_file } from "./uuid_file.mjs";
export async function run() {
  await uuid_file(run, async function () {});
  try {
    let r = process_argv_remaining();
    let v = await run_tokens(r);
    return v;
  } finally {
  }
}
