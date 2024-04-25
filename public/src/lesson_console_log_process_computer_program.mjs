import {html_li_text} from "./html_li_text.mjs";
import {html_ul} from "./html_ul.mjs";
import {html_p_text} from "./html_p_text.mjs";
import {html_hr} from "./html_hr.mjs";
export function lesson_console_log_process_computer_program(parent) {
    html_p_text(parent, 'computer programs may have inputs');
    html_p_text(parent, 'computer programs may have outputs');
    html_p_text(parent, 'we could say what the computer program does is a process');
    html_hr(parent);
    html_p_text(parent, 'our first computer program will :');
    let ul = html_ul(parent)
    html_li_text(ul, 'output a message');
    html_li_text(ul, 'not have an input');
}
