import { string_split_comma } from "./string_split_comma.mjs";
import { function_run } from "./function_run.mjs";
import { list_map_async } from "./list_map_async.mjs";

export function tests_generate(function_name, args_values_list) {
    let args_values = string_split_comma(args_values_list);
    let mapped = list_map_async(args_values, async av => await function_run(av, []))
    return mapped
}