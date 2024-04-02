import { file_js_transform } from "./file_js_transform.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { function_import } from "./function_import.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
export function function_transform(lambda_name, function_name, args) {
    let lambda = function_import(lambda_name)
    let args_split = string_split_comma(args);
    let file_path = function_name_to_path(function_name)
    file_js_transform(lambda, file_path, args_split)
}