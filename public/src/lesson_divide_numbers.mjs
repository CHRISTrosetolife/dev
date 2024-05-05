import {integer_random} from "./integer_random.mjs";
import {multiply} from "./multiply.mjs";
import {integer_random_digit_single_positive} from "./integer_random_digit_single_positive.mjs";
export function lesson_divide_numbers() {
    let a = integer_random_digit_single_positive();
    let b = integer_random_digit_single_positive();
    let dividend = multiply(a, b);
    let divisor = multiply(a, integer_random(1, 2));
    return {
        dividend,
        divisor
    };
}
