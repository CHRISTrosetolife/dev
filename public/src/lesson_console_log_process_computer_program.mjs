import {html_li_text} from "./html_li_text.mjs";
import {html_ul} from "./html_ul.mjs";
import {html_p_text} from "./html_p_text.mjs";
import {html_hr} from "./html_hr.mjs";
import { html_element } from "./html_element.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
import { html_div } from "./html_div.mjs";
import { html_style } from "./html_style.mjs";
export function lesson_console_log_process_computer_program(parent) {
    html_p_text(parent, 'a computer runs a computer program');
    html_p_text(parent, 'when a computer program is ran , the computer program may have output');
    html_p_text(parent, 'we could say :');
    let ul1 = html_ul(parent)
    html_li_text(ul1, 'when a computer runs a computer program , the running is a process');
    html_li_text(ul1, 'the computer program is an input to the running process');
    html_li_text(ul1, 'any output from the computer program is an output of the running process');
    html_hr(parent);
    html_p_text(parent, 'our first computer program will output a message :');
    let input_container = html_div(parent)
    html_p_text(input_container, 'input ( computer program ) :');
    let code = html_element(input_container, 'div')
    html_style(code, {
        'color':'white',
        'background-color':'black',
        'padding': '0.5rem',
        'border-radius': '0.5rem',
    })
    html_style(code, {
        'padding': '0.5rem',
        'border-radius': '0.5rem',
        'font-family': 'monospace'
    })
    html_inner_set(code, `console.log('hello');`)
    html_p_text(parent, 'output ( from computer program ) :');
    let output = html_element(parent, 'pre')
    html_inner_set(output, `hello`)
}
