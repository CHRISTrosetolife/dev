import {lesson_if_else_string_concat_variables_quiz} from "./lesson_if_else_string_concat_variables_quiz.mjs";
import {app_learn_code_code_part_contrast} from "./app_learn_code_code_part_contrast.mjs";
import {html_style_alternate_monospace_short} from "./html_style_alternate_monospace_short.mjs";
import {lesson_simple} from "./lesson_simple.mjs";
import {string_combine} from "./string_combine.mjs";
import {list_join_newline} from "./list_join_newline.mjs";
import {html_p_text} from "./html_p_text.mjs";
export function lesson_if_else_string_concat_variables_two() {
    let description = 'string combined with two variables';
    let example_message = string_combine('with ', description);
    return lesson_simple(function () {
        return lesson_if_else_string_concat_variables_quiz(2);
    }, example_before, description, example_message, [screen1]);
    function example_before(parent) {
        html_style_alternate_monospace_short(parent, 'strings can be concatentated with multiple variables');
    }
    function screen1(parent) {
        html_p_text(parent, 'in this lesson variable names will be declared in alphabetical order');
        html_p_text(parent, 'for example , this is allowed :');
        app_learn_code_code_part_contrast(parent, list_join_newline(['let a, b;']));
        html_p_text(parent, 'however , this is not allowed :');
        app_learn_code_code_part_contrast(parent, list_join_newline(['let b, a;']));
    }
}
