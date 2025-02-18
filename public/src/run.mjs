import { run_tokens } from "./run_tokens.mjs";
import { process_argv_remaining } from "./process_argv_remaining.mjs";
export async function run() {
  try {
    let r = process_argv_remaining();
    let v = await run_tokens(r);
    return v;
  } finally {
  }
}
