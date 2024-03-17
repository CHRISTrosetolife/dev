import { run } from "./run.mjs";
import { git_acp_message } from "./git_acp_message.mjs";

export async function run_git() {
    await run();
    let commit_message = '';
    await git_acp_message(commit_message);
}