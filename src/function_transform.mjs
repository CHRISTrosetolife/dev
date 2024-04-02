import { file_js_transform } from "./file_js_transform.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";

export function function_transform(lambda_name, function_name, args) {
    let lambda = function_import(lambda_name)
    let file_path = function_name_to_path(function_name)
    file_js_transform(lambda, file_path, args)
}