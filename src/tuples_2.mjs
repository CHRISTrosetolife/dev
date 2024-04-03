import {string_split_comma} from "./string_split_comma.mjs";
import {function_run} from "./function_run.mjs";
import {list_map_async} from "./list_map_async.mjs";
import {assert_boolean} from "./assert.mjs";
import {equal} from "./equal.mjs";
import {list_get} from "./list_get.mjs";
import {list_adder} from "./list_adder.mjs";
import {list_length} from "./list_length.mjs";
export async function tuples_2(names_pair) {
    let args_values = string_split_comma(names_pair);
    let mapped = await list_map_async(args_values, async av => await function_run(av, []));
    assert_boolean(equal(list_length(mapped), 2));
    let m1 = list_get(mapped, 0);
    let m2 = list_get(mapped, 1);
    return list_adder(la => {
        for (let m1_i of m1) {
            for (let m2_i of m2) {
                la([m1_i, m2_i]);
            }
        }
    });
}
