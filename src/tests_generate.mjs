import { function_run } from "./function_run.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_counter_async } from "./list_counter_async.mjs";

export async function tests_generate(function_name, args_values_get) {
    let args_values = await function_run(args_values_get, []);
    await list_counter_async(async count => {
        for (let args of args_values) {
            let c = count();
            let result = await function_run(function_name, args);
            console.log(list_concat(args, [result,c]));
        }
    })
}