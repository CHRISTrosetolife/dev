import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { git_acp_message } from "./git_acp_message.mjs";
export async function git_acp() {
  assert_arguments_length(arguments, 0);
  let commit_message = "";
  return await git_acp_message(commit_message);
}
