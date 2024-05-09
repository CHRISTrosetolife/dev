import {html_style_alternate_short_p} from "./html_style_alternate_short_p.mjs";
import {html_style_monospace_bold} from "./html_style_monospace_bold.mjs";
import {integer_random_digit_single} from "./integer_random_digit_single.mjs";
import {html_style_alternate_monospace_short} from "./html_style_alternate_monospace_short.mjs";
import {list_join_newline} from "./list_join_newline.mjs";
import {lesson_simple} from "./lesson_simple.mjs";
import {js_code_statement_let_assign} from "./js_code_statement_let_assign.mjs";
import {app_learn_code_log_delimit} from "./app_learn_code_log_delimit.mjs";
import {app_learn_code_log} from "./app_learn_code_log.mjs";
import {string_combine} from "./string_combine.mjs";
import {noop} from "./noop.mjs";
import {html_style_bold} from "./html_style_bold.mjs";
import { call_multiple } from "./call_multiple.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_scramble } from "./list_scramble.mjs";
import { list_take } from "./list_take.mjs";
import { list_map } from "./list_map.mjs";
import { string_delimit } from "./string_delimit.mjs";
export function lesson_if_else_string_concat() {
    let description = 'two strings combined';
    let example_message = string_combine('with ', description);
    return lesson_simple(function () {
        let words = lesson_console_log_quiz_words();
        let scrambled = list_scramble(words);
        let w = list_take(scrambled, 2);
        let mapped = list_map(w, string_delimit)
        let [a,b] = mapped;
        return app_learn_code_log(`${a} + ${b}`);
    }, example_before, description, example_message, []);
    function example_before(parent) {
        html_style_alternate_monospace_short(parent, 'an `if` `else` can be inside of an `if`');
    }
}
