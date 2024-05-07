import {file_overwrite} from "./file_overwrite.mjs";
import {function_run} from "./function_run.mjs";
import {json_from} from "./json_from.mjs";
import {json_to} from "./json_to.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
import { string_suffix_without } from "./string_suffix_without.mjs";
export async function function_run_json(function_name, args_json_string, output_file_path) {
    args_json_string = string_prefix_without(args_json_string, '\'')
    args_json_string = string_suffix_without(args_json_string, '\'')
    await file_overwrite('log.txt', args_json_string);
    let {args} = json_from(args_json_string);
    let result = await function_run(function_name, args);
    let json = json_to(result);
    await file_overwrite(output_file_path, json)
}
