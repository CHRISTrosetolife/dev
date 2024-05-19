import { string_prefix_without } from "./string_prefix_without.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
export function github_open(function_name) {
  let function_path = function_name_to_path(function_name);
  let trimmed = string_prefix_without(function_path, "./");
  let url = `https://github.com/CHRISTrosetolife/dev/blob/master/${trimmed}`;
  return url;
}
