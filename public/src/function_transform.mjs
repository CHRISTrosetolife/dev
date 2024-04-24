import {function_transform_args} from "./function_transform_args.mjs";
import {file_js_transform} from "./file_js_transform.mjs";
import {function_name_to_path} from "./function_name_to_path.mjs";
import {function_import} from "./function_import.mjs";
import {string_split_comma} from "./string_split_comma.mjs";
import {string_combine} from "./string_combine.mjs";
import { list_length } from "./list_length.mjs";
import { assert } from "./assert.mjs";
import { equal } from "./equal.mjs";
export async function function_transform(lambda_name, function_name) {
    let args = arguments;
    let length = list_length(args);
    assert(equal,[length, 2])
    return function_transform_args(lambda_name, function_name, 'a');
}
