import {html_style_units} from "./html_style_units.mjs";
import {app_learn_code_style_code_color} from "./app_learn_code_style_code_color.mjs";
import {equal} from "./equal.mjs";
import {app_learn_code_code_background} from "./app_learn_code_code_background.mjs";
import {html_span_text} from "./html_span_text.mjs";
import {app_learn_code_code_part_generic} from "./app_learn_code_code_part_generic.mjs";
import {list_adder} from "./list_adder.mjs";
import {app_learn_code_eval_messages_to_string} from "./app_learn_code_eval_messages_to_string.mjs";
import {app_learn_code_eval} from "./app_learn_code_eval.mjs";
import {js_tokenize} from "./js_tokenize.mjs";
import {html_p_text} from "./html_p_text.mjs";
import {lesson_console_log_quiz_get} from "./lesson_console_log_quiz_get.mjs";
import {list_map} from "./list_map.mjs";
import {html_style} from "./html_style.mjs";
export function lesson_console_log_unscramble(parent) {
    let source = lesson_console_log_quiz_get();
    let messages = app_learn_code_eval(source);
    let joined = app_learn_code_eval_messages_to_string(messages);
    html_p_text(parent, 'below is another quiz');
    html_p_text(parent, 'write a program that outputs the following :');
    html_p_text(parent, joined);
    let tokens = list_adder(la => {
        for (let token of js_tokenize(source)) {
            la(token);
        }
    });
    let mapped = list_map(tokens, t => {
        console.log({
            t
        });
        let {type} = t;
        let {label} = type;
        if (equal(label, 'name')) {
            let {value} = t;
            return value;
        }
        return label;
    });
    for (let m of mapped) {
        let part = app_learn_code_code_part_generic(html_span_text, parent, m, app_learn_code_code_background());
        app_learn_code_style_code_color(part);
        html_style(part, {
            margin: html_style_units(5)
        });
    }
}
