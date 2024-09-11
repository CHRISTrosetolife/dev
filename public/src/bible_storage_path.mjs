import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function bible_storage_path() {
  assert_arguments_length(arguments, 0);
  return "bible/";
}
