import { assert_arguments_length } from "./assert_arguments_length.mjs";
export async function list_wait(promises_list) {
  assert_arguments_length(arguments, 1);
  let v = await Promise.all(promises_list);
  return v;
}
