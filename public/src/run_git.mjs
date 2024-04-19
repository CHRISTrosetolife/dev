import {run} from "./run.mjs";
import {git_ac_message} from "./git_ac_message.mjs";
import {process_argv_remaining} from "./process_argv_remaining.mjs";
import {list_add_beginning} from "./list_add_beginning.mjs";
export async function run_git() {
    let result = await run();
    let remaining = process_argv_remaining();
    list_add_beginning(remaining, ' ');
    let commit_message = remaining.join(' ');
    await git_ac_message(commit_message);
    return result;
}
