import { command_line_exec } from "./command_line_exec.mjs";
export async function git_index_lock_delete() {
  return await command_line_exec("del .git\\index.lock");
}
