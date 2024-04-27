import {app_learn_code_eval_messages_to_string} from "./app_learn_code_eval_messages_to_string.mjs";
import {app_learn_code_eval} from "./app_learn_code_eval.mjs";
import {js_tokenize} from "./js_tokenize.mjs";
import {html_p_text} from "./html_p_text.mjs";
import {lesson_console_log_quiz_get} from "./lesson_console_log_quiz_get.mjs";
export function lesson_console_log_unscramble(parent) {
    let source = lesson_console_log_quiz_get();
    let messages = app_learn_code_eval(source);
    let joined = app_learn_code_eval_messages_to_string(messages);
    html_p_text(parent, 'below is another quiz');
    html_p_text(parent, 'write a program that outputs : hello');
    for (let token of js_tokenize('function test(){}')) {
        console.log(token);
    }
}
