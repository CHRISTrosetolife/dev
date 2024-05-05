import {string_random_letter} from "./string_random_letter.mjs";
import {string_combine} from "./string_combine.mjs";
import {range} from "./range.mjs";
import {integer_random} from "./integer_random.mjs";
import { list_remove } from "./list_remove.mjs";
export function app_learn_code_random_identifier() {
    let ks = keyboard_keys();
    list_remove(ks, 'l');
    'the letter l looks like an i and a 1 so removing to to avoid visual ambiguity'
    let count = integer_random(1, 1);
    'would need to exclude identifier names that cannot be used such as "if"'
    'therefore setting to 1'
    let name = '';
    for (let i of range(count)) {
        const l = string_random_letter();
        name = string_combine(name, l);
    }
    return name;
}
