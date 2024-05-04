import {app_learn_code_log} from "./app_learn_code_log.mjs";
import {integer_random_digit_single_positive} from "./integer_random_digit_single_positive.mjs";
import {integer_random_digit_single} from "./integer_random_digit_single.mjs";
import {list_random_item} from "./list_random_item.mjs";
import {random_50_50} from "./random_50_50.mjs";
import {integer_random} from "./integer_random.mjs";
export function lesson_add_quiz() {
    let a = integer_random_digit_single_positive();
    let b = integer_random_digit_single_positive();
    return app_learn_code_log(`${a} + ${b}`);
}
