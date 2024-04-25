import {app_learn_code_code_part} from "./app_learn_code_code_part.mjs";
import {html_spacer_vertical} from "./html_spacer_vertical.mjs";
import {html_style_margin_none} from "./html_style_margin_none.mjs";
import {app_learn_code_style_rounded_padded} from "./app_learn_code_style_rounded_padded.mjs";
import {app_learn_code_style_code} from "./app_learn_code_style_code.mjs";
import {html_p} from "./html_p.mjs";
import {html_li_text} from "./html_li_text.mjs";
import {html_ul} from "./html_ul.mjs";
import {html_p_text} from "./html_p_text.mjs";
import {html_hr} from "./html_hr.mjs";
import {html_element} from "./html_element.mjs";
import {html_inner_set} from "./html_inner_set.mjs";
import {html_div} from "./html_div.mjs";
import {html_style} from "./html_style.mjs";
export function lesson_console_log_process_computer_program(parent) {
    html_p_text(parent, 'a computer runs a computer program');
    html_p_text(parent, 'when a computer program is run , the computer program may have output');
    html_p_text(parent, 'we could say :');
    let ul1 = html_ul(parent);
    html_li_text(ul1, 'when a computer runs a computer program , the running is a process');
    html_li_text(ul1, 'the computer program is an input to the running process');
    html_li_text(ul1, 'any output from the computer program is an output of the running process');
    html_hr(parent);
    html_p_text(parent, 'our first computer program will output a message :');
    let input_container = html_div(parent);
    app_learn_code_style_rounded_padded(input_container);
    html_style(input_container, {
        'background-color': 'lightgray'
    });
    let {code} = app_learn_code_code_part(input_container, 'input ( computer program ) :', `console.log('hello');`, 'black');
    html_style(code, {
        'color': 'white'
    });
    app_learn_code_code_part(input_container, 'output ( from computer program ) :', `hello`, 'lightgreen');
}
