
import { git_acp_message } from "./git_acp_message.mjs";

export async function git_acp() {
    let commit_message = '';
    await git_acp_message(commit_message);
}

