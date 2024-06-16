import { command_line } from "./command_line.mjs";
export async function git_index_lock_delete() {
  return await command_line("del .git\\index.lock");
}
