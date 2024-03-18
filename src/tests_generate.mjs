import { function_run } from "./function_run.mjs";
import { list_concat } from "./list_concat.mjs";
import { function_new_generic } from "./function_new_generic.mjs";
import { equal } from "./equal.mjs";
import { list_map } from "./list_map.mjs";
import { assert } from "./assert.mjs";
import { string_includes } from "./string_includes.mjs";
import { range } from "./range.mjs";
import { add_1 } from "./add_1.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { json_to } from "./json_to.mjs";
import { object_property_exists } from "./object_property_exists.mjs";

export async function tests_generate(function_name, args_values_get) {
    let args_values = await function_run(args_values_get, []);
    let existing = {};
    let max = 10;
    for (let i of range(max)) {
        let c = add_1(i);
        let attempts = 100;
        for (let j of range(attempts)) {
            let args = list_random_item(args_values);
            let args_json = json_to(args);
            if (!object_property_exists(existing, args_json)) {
                let result = await function_run(function_name, args);
                console.log(c.toString(), list_concat(args, [result]));
                let result_name = 'result';
                let string_delimeter = "'";
                for (let arg of args) {
                    assert(!string_includes(arg, string_delimeter));
                }
                let args_mapped = list_map(args, arg => `${string_delimeter}${arg}${string_delimeter}`)
                await function_new_generic(`${function_name}_test_${c}`, ``, `    let ${result_name} = ${function_name}(${args_mapped.join(', ')});
    ${assert.name}(${equal.name}(${result_name}, ${result}))`, false, [assert.name, equal.name]);
                break;
            }
        }
    }
}