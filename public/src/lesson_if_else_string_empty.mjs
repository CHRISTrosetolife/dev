import {lesson_if_else_string_concat_variables_quiz} from "./lesson_if_else_string_concat_variables_quiz.mjs";
import {app_learn_code_code_part_contrast} from "./app_learn_code_code_part_contrast.mjs";
import {html_style_alternate_monospace_short} from "./html_style_alternate_monospace_short.mjs";
import {lesson_simple} from "./lesson_simple.mjs";
import {string_combine} from "./string_combine.mjs";
import {list_join_newline} from "./list_join_newline.mjs";
import {html_p_text} from "./html_p_text.mjs";
import {js_code_let} from "./js_code_let.mjs";
import {js_code_statement_let_assign} from "./js_code_statement_let_assign.mjs";
import {string_delimit} from "./string_delimit.mjs";
import {integer_random_digit_single} from "./integer_random_digit_single.mjs";
import {js_code_statement_assign} from "./js_code_statement_assign.mjs";
import {app_learn_code_log_delimit} from "./app_learn_code_log_delimit.mjs";
import {app_learn_code_log} from "./app_learn_code_log.mjs";
import {list_join} from "./list_join.mjs";
import { html_style_alternate_bold_short } from "./html_style_alternate_bold_short.mjs";
import { lesson_console_log_quiz_words } from "./lesson_console_log_quiz_words.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_scramble } from "./list_scramble.mjs";
export function lesson_if_else_string_empty() {
    let description = 'string concatentation with an `if';
    let example_message = string_combine('with ', description);
    return lesson_simple(function () {
        let words = lesson_console_log_quiz_words();
        let word = list_random_item(words);
        let items = [word, string_delimit('')];
        list_scramble(items);
        let lines = [
            app_learn_code_log(list_join(items, ' + '))
        ]
        return list_join_newline(lines)
    }, example_before, description, example_message, []);
    function example_before(parent) {
        html_p_text(parent, 'a string can have nothing in it')
        html_style_alternate_bold_short(parent, 'this is called an `empty string')
        html_p_text(parent, 'if a string is concatenated with an empty string , then the result is the same as before')
        html_style_alternate_monospace_short(parent, 'an empty string can look like this : `\'\'')
    }
}
