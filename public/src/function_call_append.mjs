import {js_call_append} from "./js_call_append.mjs";
import {function_transform_args_split} from "./function_transform_args_split.mjs";
import {assert} from "./assert.mjs";
import {equal} from "./equal.mjs";
import {list_get} from "./list_get.mjs";
import {list_length} from "./list_length.mjs";
import {string_split} from "./string_split.mjs";
import {string_split_comma} from "./string_split_comma.mjs";
export async function function_call_append(function_name, combined) {
    let split = string_split(combined, ':');
    let length = list_length(split);
    assert(equal, [length, 3]);
    let callee = list_get(split, 0);
    let args_string = list_get(split, 1);
    let result_name = list_get(split, 2);
    let args;
    if (equal(args_string, '')) {
        args = [];
    } else {
        args = string_split_comma(args_string);
    }
    await function_transform_args_split(js_call_append.name, function_name, [{
        function_name: callee,
        args,
        result_name
    }]);
}
