import { run } from "./run.mjs";
import { git_acp_message } from "./git_acp_message.mjs";
import { process_argv_remaining } from "./process_argv_remaining.mjs";

export async function run_git() {
    let result = await run();
    let remaining = process_argv_remaining();
    remaining.splice(0, 0, ' ')
    let commit_message = remaining.join(' ');
    await git_acp_message(commit_message);
    return result;
}