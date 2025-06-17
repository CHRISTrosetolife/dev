import { git_ac_message_options } from "./git_ac_message_options.mjs";
export async function git_ac_message(commit_message) {
  let options = {};
  let v = await git_ac_message_options(commit_message, options);
  return v;
}
