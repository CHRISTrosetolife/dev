import { exec } from "child_process";
import { command_line } from "./command_line.mjs";

export function git_acp(command) {
    let commands = [
        'add *',
        `commit -m "${new Date().toISOString()}"`,
        'push'
    ];
    for (let command of commands) {
        command_line
    }
}