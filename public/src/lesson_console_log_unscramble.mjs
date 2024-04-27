import {app_learn_code_eval_messages_to_string} from "./app_learn_code_eval_messages_to_string.mjs";
import {app_learn_code_eval} from "./app_learn_code_eval.mjs";
import {js_tokenize} from "./js_tokenize.mjs";
import {html_p_text} from "./html_p_text.mjs";
import {lesson_console_log_quiz_get} from "./lesson_console_log_quiz_get.mjs";
import { list_map } from "./list_map.mjs";
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
    })
    let mapped = list_map(tokens, t => {
        let {type} = t;
        let {label} = type;
        return label
    })
    for (let m of mapped) {
        
    }
}
