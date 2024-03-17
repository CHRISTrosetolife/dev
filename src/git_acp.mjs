import { exec } from "child_process";

export function git_acp(command) {
    let commands = [
        'add *',
        `commit -m "${new Date().toISOString()}"`,
        'push'
    ];
}