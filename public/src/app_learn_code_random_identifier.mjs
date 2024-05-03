import {string_random_letter} from "./string_random_letter.mjs";
import {string_combine} from "./string_combine.mjs";
import {range} from "./range.mjs";
import {integer_random} from "./integer_random.mjs";
export function app_learn_code_random_identifier() {
    let count = integer_random(1, 3);
    let name = '';
    for (let i of range(count)) {
        name = string_combine(name, string_random_letter());
    }
    return name;
}
