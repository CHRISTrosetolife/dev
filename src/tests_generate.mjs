import { function_run } from "./function_run.mjs";

import { range } from "./range.mjs";
import { add_1 } from "./add_1.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { json_to } from "./json_to.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { tests_generate_single } from "./tests_generate_single.mjs";

export async function tests_generate(function_name, args_values_get) {
    let args_values = await function_run(args_values_get, []);
    let existing = {};
    let max = 10;
    for (let test_index of range(max)) {
        let c = add_1(test_index);
        let attempts = 100;
        for (let j of range(attempts)) {
            let args = list_random_item(args_values);
            let args_json = json_to(args);
            if (!object_property_exists(existing, args_json)) {
                await tests_generate_single(function_name, args, c);
                break;
            }
        }
    }
}

