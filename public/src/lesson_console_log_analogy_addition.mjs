import {html_li_text} from "./html_li_text.mjs";
import {html_ul} from "./html_ul.mjs";
import {html_p_text} from "./html_p_text.mjs";
export function lesson_console_log_analogy_addition(parent) {
    html_p_text(parent, 'suppose two numbers are added together to get their sum');
    html_p_text(parent, 'we could say :');
    let ol = html_ul(parent);
    html_li_text(ol, 'the adding of the two numbers together is a process');
    html_li_text(ol, 'the two numbers are the inputs to the addition process');
    html_li_text(ol, 'the sum of the two numbers is the output of the addition process');
    html_p_text(parent, 'suppose the letters "a", "b" and "c" represent numbers');
    html_p_text(parent, 'suppose there is an equation : a + b = c');
}
