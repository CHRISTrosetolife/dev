import { folder_previous_join } from "./folder_previous_join.mjs";
import { fn_name } from "./fn_name.mjs";
import { file_write } from "./file_write.mjs";
import { git_ac_message_options } from "./git_ac_message_options.mjs";
import { command_line_git_cwd } from "./command_line_git_cwd.mjs";
import { folder_new } from "./folder_new.mjs";
import { assert_not_async } from "./assert_not_async.mjs";
import { file_exists } from "./file_exists.mjs";
import { path_join } from "./path_join.mjs";
export async function github_repo_new(name) {
  let path = folder_previous_join(name);
  await assert_not_async(file_exists, [path]);
  await folder_new(path);
  await file_write(path_join([path, "readme.txt"]), name);
  await command_line_git_cwd("init", path);
  await git_ac_message_options(fn_name("github_repo_new"), {
    cwd: path,
  });
  let v = path;
  return v;
}
