import { string_split_comma } from "./string_split_comma.mjs";
import { function_run } from "./function_run.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { assert } from "./assert.mjs";
import { equal } from "./equal.mjs";
import { list_get } from "./list_get.mjs";

export async function tests_generate(function_name, args_values_get) {
    let args_values = await function_run(args_values_get, []);
    for (let args of args_values) {
        let result = await function_run(function_name, args);
        console.log({args, result})
    }
}