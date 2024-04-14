import {run} from "./run.mjs";
import {git_ac_message} from "./git_ac_message.mjs";
import {process_argv_remaining} from "./process_argv_remaining.mjs";
export async function run_git() {
    let result = await run();
    let remaining = process_argv_remaining();
    remaining.splice(0, 0, ' ');
    let commit_message = remaining.join(' ');
    await git_ac_message(commit_message);
    return result;
}
