import {command_line} from "./command_line.mjs";
export async function command_line_git(args) {
    await command_line(`git ${args}`);
}
