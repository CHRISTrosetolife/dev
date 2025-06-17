import { command_line_git } from "./command_line_git.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function command_line_git_multiple(commands) {
  let options = {};
  let result = await list_map_async(commands, async function (command) {
    let v = await command_line_git(command);
    return v;
  });
  return result;
}
