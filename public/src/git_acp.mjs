import { fn_name } from "./fn_name.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { git_acp_message } from "./git_acp_message.mjs";
export async function git_acp() {
  assert_arguments_length(arguments, 0);
  let result = await git_acp_message(fn_name("git_acp"));
}
