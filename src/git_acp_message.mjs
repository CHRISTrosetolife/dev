import { git_ac_message } from "./git_ac_message.mjs";
export async function git_acp_message(commit_message) {
    await git_ac_message(commit_message);
    await git_push();
}


