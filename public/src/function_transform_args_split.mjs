import {file_js_transform} from "./file_js_transform.mjs";
import {function_name_to_path} from "./function_name_to_path.mjs";
import {function_import} from "./function_import.mjs";
export async function function_transform_args_split(lambda_name, function_name, args) {
    let lambda = await function_import(lambda_name);
    let file_path = function_name_to_path(function_name);
    console.log({file_path, function_name})
    return await file_js_transform(lambda, file_path, args);
}
