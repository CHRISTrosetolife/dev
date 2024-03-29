import { list_concat } from "./list_concat.mjs";
import { function_new_generic } from "./function_new_generic.mjs";
import { equal } from "./equal.mjs";
import { list_map } from "./list_map.mjs";
import { assert } from "./assert.mjs";
import { string_includes } from "./string_includes.mjs";
import { function_run } from "./function_run.mjs";

export async function tests_generate_single(function_name, args, test_number) {
    let result = await function_run(function_name, args);
    console.log(test_number.toString(), list_concat(args, [result]));
    let result_name = 'result';
    let string_delimeter = "'";
    for (let arg of args) {
        assert(!string_includes(arg, string_delimeter));
    }
    let args_mapped = list_map(args, arg => {
        let result = string_delimit(arg);
        return result;
    });
    await function_new_generic(`${function_name}_test_${test_number}`, ``, `    let ${result_name} = ${function_name}(${args_mapped.join(', ')});
    ${assert.name}(${equal.name}(${result_name}, ${result}))`, false, [assert.name, equal.name]);
}


