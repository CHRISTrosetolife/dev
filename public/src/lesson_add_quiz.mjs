import {integer_random_digit_single} from "./integer_random_digit_single.mjs";
import {list_random_item} from "./list_random_item.mjs";
import {random_50_50} from "./random_50_50.mjs";
import {integer_random} from "./integer_random.mjs";
export function lesson_add_quiz() {
    let a = integer_random_digit_single();
    let value = integer_random(0, 999999);
    if (random_50_50()) {
        value = value / list_random_item([10, 100, 1000]);
    }
    if (random_50_50()) {
        value = value * -1;
    }
    return `console.log(${value});`;
}
