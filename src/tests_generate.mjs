import { function_run } from "./function_run.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_counter_async } from "./list_counter_async.mjs";
import { function_new_generic } from "./function_new_generic.mjs";
import { equal } from "./equal.mjs";
import { list_map } from "./list_map.mjs";
import { assert } from "./assert.mjs";
import { string_includes } from "./string_includes.mjs";
import { range } from "./range.mjs";
import { add_1 } from "./add_1.mjs";
import { list_random_item } from "./list_random_item.mjs";

export async function tests_generate(function_name, args_values_get) {
    let args_values = await function_run(args_values_get, []);
    let max = 10;
    for (let i of range(max)) {
        let index = add_1(i);
        let args = list_random_item(args_values)
    }
    await list_counter_async(async count => {
        for (let args of args_values) {
            let c = count();
            let result = await function_run(function_name, args);
            console.log(c.toString(), list_concat(args, [result]));
            let result_name = 'result';
            let string_delimeter = "'";
            for (let arg of args) {
                assert(!string_includes(arg, string_delimeter));
            }
            let args_mapped = list_map(args, arg => `${string_delimeter}${arg}${string_delimeter}`)
            await function_new_generic(`${function_name}_test_${c}`, ``, `    let ${result_name} = ${function_name}(${args_mapped.join(', ')});
    ${assert.name}(${equal.name}(${result_name}, ${result}))`, false, [assert.name, equal.name])
        }
    })
}