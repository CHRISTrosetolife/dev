import {file_js_transform} from "./file_js_transform.mjs";
import {function_name_to_path} from "./function_name_to_path.mjs";
import {function_import} from "./function_import.mjs";
import {string_split_comma} from "./string_split_comma.mjs";
import {string_combine} from "./string_combine.mjs";
export async function function_transform(lambda_name, function_name, a) {
  let concated = string_combine('js_', lambda_name);
  let lambda = await function_import(concated);
  let args_split = string_split_comma(a);
  let file_path = function_name_to_path(function_name);
  file_js_transform(lambda, file_path, args_split);
}
