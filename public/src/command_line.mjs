import {import_node} from "./import_node.mjs";
export async function command_line(command) {
    let c = await import_node("child_process");
    let {exec} = c;
    return await new Promise(resolve => {
        exec(command, (error, stdout, stderr) => {
            resolve({
                error,
                stdout,
                stderr
            });
        });
    });
}
