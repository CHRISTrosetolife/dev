import { run } from "./run.mjs";
import { git_acp_message } from "./git_acp_message.mjs";
import { process_argv_remaining } from "./process_argv_remaining.mjs";

export async function run_git() {
    await run();
    let remaining = process_argv_remaining();
    let commit_message = remaining.join(' ');
    await git_acp_message(commit_message);
}