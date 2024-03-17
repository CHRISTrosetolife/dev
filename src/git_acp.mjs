import { command_line } from "./command_line.mjs";

export async function git_acp() {
    let commands = [
        'add *',
        `commit -m "${new Date().toISOString()}"`,
        'push'
    ];
    for (let command of commands) {
        await command_line(`git ${command}`);
    }
}