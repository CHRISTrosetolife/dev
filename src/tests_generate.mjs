import { function_run } from "./function_run.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_counter_async } from "./list_counter_async.mjs";
import { function_new_generic } from "./function_new_generic.mjs";
import { assert } from "./assert.mjs";
import { equal } from "./equal.mjs";

export async function tests_generate(function_name, args_values_get) {
    let args_values = await function_run(args_values_get, []);
    await list_counter_async(async count => {
        for (let args of args_values) {
            let c = count();
            let result = await function_run(function_name, args);
            console.log(c.toString(), list_concat(args, [result]));
            function_new_generic(`${function_name}_test_${c}`, ``, `let result = ${function_name}(${args.join(', ')});
${assert.name}(${equal.name}(result, ${result}))`)
        }
    })
}