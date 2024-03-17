import { string_split_comma } from "./string_split_comma.mjs";

export function tests_generate(function_name, args_values_list) {
    let args_values = string_split_comma(args_values_list);
    let mapped = list_map(args_values, av => function_run(av, []))
    return mapped
}