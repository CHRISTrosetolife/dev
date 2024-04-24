import {function_transform_args_split} from "./function_transform_args_split.mjs";
import {file_js_transform} from "./file_js_transform.mjs";
import {function_name_to_path} from "./function_name_to_path.mjs";
import {function_import} from "./function_import.mjs";
import {string_split_comma} from "./string_split_comma.mjs";
import {string_combine} from "./string_combine.mjs";
export async function function_transform_args(lambda_name, function_name, args) {
    let args_split = string_split_comma(args);
    return await function_transform_args_split(lambda_name, function_name, args_split);
}
