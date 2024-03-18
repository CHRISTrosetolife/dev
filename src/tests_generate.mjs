import { function_run } from "./function_run.mjs";
import { list_concat } from "./list_concat.mjs";

export async function tests_generate(function_name, args_values_get) {
    let args_values = await function_run(args_values_get, []);
    for (let args of args_values) {
        let result = await function_run(function_name, args);
        console.log(list_concat(args, [result]));
    }
}