import {list_insert} from "./list_insert.mjs";
import {list_join} from "./list_join.mjs";
import {list_remove_multiple_at} from "./list_remove_multiple_at.mjs";
import {html_style_alternate_bold_short} from "./html_style_alternate_bold_short.mjs";
import {lesson_console_log_quiz_words} from "./lesson_console_log_quiz_words.mjs";
import {html_style_alternate_monospace_short} from "./html_style_alternate_monospace_short.mjs";
import {lesson_simple} from "./lesson_simple.mjs";
import {app_learn_code_log} from "./app_learn_code_log.mjs";
import {string_combine} from "./string_combine.mjs";
import {list_take} from "./list_take.mjs";
import {list_map} from "./list_map.mjs";
import {string_delimit} from "./string_delimit.mjs";
import {list_set} from "./list_set.mjs";
import {list_skip} from "./list_skip.mjs";
import {list_length} from "./list_length.mjs";
import {subtract} from "./subtract.mjs";
import {integer_random} from "./integer_random.mjs";
import {list_first} from "./list_first.mjs";
import {random_50_50} from "./random_50_50.mjs";
import {list_get} from "./list_get.mjs";
import {add_1} from "./add_1.mjs";
export function lesson_if_else_string_concat() {
    let description = 'two strings combined';
    let example_message = string_combine('with ', description);
    return lesson_simple(function () {
        let words = lesson_console_log_quiz_words();
        if (1) words = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
        let words_length = list_length(words);
        let count = integer_random(2, 4);
        let remaining = list_skip(words, integer_random(0, subtract(words_length, count)));
        let w = list_take(remaining, count);
        while (list_length(w) > 2) {
            let i;
            if (random_50_50()) {
                i = 0;
            } else {
                i = list_length(w) - 2;
            }
            let w_i = list_get(w, i);
            let w_j = list_get(w, add_1(i));
            let combined = list_join([w_i, w_j], ' ');
            list_remove_multiple_at(w, i, 2);
            list_insert(w, i, combined);
        }
        list_set(w, 0, string_combine(list_first(w), ' '));
        let mapped = list_map(w, string_delimit);
        let [a, b] = mapped;
        return app_learn_code_log(`${a} + ${b}`);
    }, example_before, description, example_message, [screen1]);
    function example_before(parent) {}
    function screen1(parent) {
        html_style_alternate_monospace_short(parent, 'remember , in javascript if `a` and `b` are numbers then `a + b` will add the two numbers together');
        html_style_alternate_monospace_short(parent, 'however , if `a` and `b` are strings then `a + b` will combine the two strings together');
        html_style_alternate_bold_short(parent, 'when two strings are conbined , it is called `concatentation');
    }
}
