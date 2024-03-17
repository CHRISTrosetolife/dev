import { command_line } from "./command_line.mjs";

export async function git_acp() {
    let commit_message = '';
    await git_acp_message(commit_message);
}
async function git_acp_message(commit_message) {
    let commands = [
        'add *',
        `commit -m "${new Date().toISOString()}${commit_message}"`,
        'push'
    ];
    for (let command of commands) {
        await command_line(`git ${command}`);
    }
}

