import {js_tokenize} from "./js_tokenize.mjs";
import {html_p_text} from "./html_p_text.mjs";
export function lesson_console_log_unscramble(parent) {
    html_p_text(parent, 'below is another quiz');
    html_p_text(parent, 'write a program that outputs : hello');
    for (let token of js_tokenize('test')) {
        console.log();
    }
}
