import {html_style_alternate_bold_short} from "./html_style_alternate_bold_short.mjs";
import {lesson_console_log_quiz_words} from "./lesson_console_log_quiz_words.mjs";
import {html_style_alternate_monospace_short} from "./html_style_alternate_monospace_short.mjs";
import {lesson_simple} from "./lesson_simple.mjs";
import {app_learn_code_log} from "./app_learn_code_log.mjs";
import {string_combine} from "./string_combine.mjs";
import {list_scramble} from "./list_scramble.mjs";
import {list_take} from "./list_take.mjs";
import {list_map} from "./list_map.mjs";
import {string_delimit} from "./string_delimit.mjs";
import { list_set } from "./list_set.mjs";
import { list_skip } from "./list_skip.mjs";
import { list_length } from "./list_length.mjs";
export function lesson_if_else_string_concat() {
    let description = 'two strings combined';
    let example_message = string_combine('with ', description);
    return lesson_simple(function () {
        let words = lesson_console_log_quiz_words();
        let wl = list_length(words)
        let remain
        list_scramble(words);
        let w = list_take(words, 2);
        list_skip()
        list_set(w, 0, string_combine());
        let mapped = list_map(w, string_delimit);
        let [a, b] = mapped;
        return app_learn_code_log(`${a} + ${b}`);
    }, example_before, description, example_message, [screen1]);
    function example_before(parent) {
    }
    function screen1(parent) {
        html_style_alternate_monospace_short(parent, 'remember , in javascript if `a` and `b` are numbers then `a + b` will add the two numbers together');
        html_style_alternate_monospace_short(parent, 'however , if `a` and `b` are strings then `a + b` will combine two strings together');
        html_style_alternate_bold_short(parent, 'when two strings are conbined , it is called `concatentation');
    }
}
