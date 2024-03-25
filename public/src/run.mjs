import { function_run } from './function_run.mjs';
import { process_argv_remaining } from './process_argv_remaining.mjs';
export async function run() {
    let remaining = process_argv_remaining();
    let first = remaining[0];
    let args = remaining.slice(1);
    return await function_run(first, args);
}
