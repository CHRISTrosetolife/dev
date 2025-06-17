import { assert_async } from "./assert_async.mjs";
import { file_exists } from "./file_exists.mjs";
import { folder_previous } from "./folder_previous.mjs";
import { path_join } from "./path_join.mjs";
export async function github_repo_new(name) {
  let path = path_join([folder_previous(), name]);
  if (await file_exists(path)) {
  }
  await assert_async();
}
