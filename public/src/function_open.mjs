import { unawait } from "./unawait.mjs";
import { assert_async } from "./assert_async.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_open } from "./file_open.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
export async function function_open(function_name) {
  let file_path = function_name_to_path(function_name);
   file_open_unawait(file_path);
}

 function file_open_unawait(file_path) {
    unawait(async () => await file_open(file_path));
}
