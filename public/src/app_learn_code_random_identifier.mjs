import {list_single} from "./list_single.mjs";
import {app_learn_code_random_identifiers} from "./app_learn_code_random_identifiers.mjs";
import {string_random_letter} from "./string_random_letter.mjs";
import {string_combine} from "./string_combine.mjs";
import {range} from "./range.mjs";
import {integer_random} from "./integer_random.mjs";
import {list_remove} from "./list_remove.mjs";
import {assert} from "./assert.mjs";
import {equal} from "./equal.mjs";
import {list_length} from "./list_length.mjs";
import {list_first} from "./list_first.mjs";
export function app_learn_code_random_identifier() {
    let list = app_learn_code_random_identifiers(1);
    return list_single(list);
}
