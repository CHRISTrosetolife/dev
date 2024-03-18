import { string_split_comma } from "./string_split_comma.mjs";
import { function_run } from "./function_run.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { assert } from "./assert.mjs";
import { equal } from "./equal.mjs";
import { list_get } from "./list_get.mjs";

export function tuples_2(names_pair) {
    let args_values = string_split_comma(names_pair);
    let mapped = list_map_async(args_values, async av => await function_run(av, []))
    assert(equal(list_length(mapped), 2));
    let m1 = list_get(mapped, 0);
    let m2 = list_get(mapped, 1);
}