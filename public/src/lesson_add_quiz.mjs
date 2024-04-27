import {integer_random_digit_single} from "./integer_random_digit_single.mjs";
import {list_random_item} from "./list_random_item.mjs";
import {random_50_50} from "./random_50_50.mjs";
import {integer_random} from "./integer_random.mjs";
export function lesson_add_quiz() {
    let a = integer_random_digit_single();
    let b = integer_random_digit_single();
    return `console.log(${a} + ${b});`;
}
