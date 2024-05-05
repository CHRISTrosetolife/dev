import {string_random_letter} from "./string_random_letter.mjs";
import {string_combine} from "./string_combine.mjs";
import {range} from "./range.mjs";
import {integer_random} from "./integer_random.mjs";
import {list_remove} from "./list_remove.mjs";
import { list_scramble } from "./list_scramble.mjs";
import { list_take } from "./list_take.mjs";
export function app_learn_code_random_identifiers(count) {
    let ks = keyboard_keys();
    'the letter l looks like an i and a 1 so removing to to avoid visual ambiguity';
    list_remove(ks, 'l');
    list_scramble(ks);
    return list_take(count);
}
