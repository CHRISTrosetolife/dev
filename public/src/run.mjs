import { run_tokens } from "./run_tokens.mjs";
import { process_argv_remaining } from "./process_argv_remaining.mjs";
export async function run() {
  let r = process_argv_remaining();
  return run_tokens(r);
}
