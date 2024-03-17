import { exec } from "child_process";

export function command_line(command) {
    return new Promise((resolve) => {
        exec(command, (error, stdout, stderr) => {
            resolve({error, stdout, stderr});
        });
    })
}