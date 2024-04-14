import {function_run} from "./function_run.mjs";
import {range} from "./range.mjs";
import {add_1} from "./add_1.mjs";
import {list_random_item} from "./list_random_item.mjs";
import {json_to} from "./json_to.mjs";
import {object_property_exists} from "./object_property_exists.mjs";
import {tests_generate_single} from "./tests_generate_single.mjs";
import {object_property_set} from "./object_property_set.mjs";
export async function function_tests_generate(function_name, args_values_get) {
    let args_values = await function_run(args_values_get, []);
    let existing = {};
    let max = 10;
    for (let test_index of range(max)) {
        let test_number = add_1(test_index);
        let attempts = 100;
        for (let attempt of range(attempts)) {
            let args = list_random_item(args_values);
            let args_json = json_to(args);
            if (!object_property_exists(existing, args_json)) {
                object_property_set(existing, args_json, true);
                await tests_generate_single(function_name, args, test_number);
                break;
            }
        }
    }
}
