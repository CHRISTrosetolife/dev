import {app_learn_code_style_code_color} from "./app_learn_code_style_code_color.mjs";
import {html_style_bold} from "./html_style_bold.mjs";
import {noop} from "./noop.mjs";
import {html_style_alternate} from "./html_style_alternate.mjs";
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
import { app_learn_code_code_part_titled } from "./app_learn_code_code_part_titled.mjs";
export function lesson_console_log_process_computer_program(parent) {
    html_p_text(parent, 'a computer program may have inputs');
    html_p_text(parent, 'a computer program may have outputs');
    html_p_text(parent, 'a computer program does something&nbsp;, using any inputs and producing any outputs');
    html_p_text(parent, 'we could say a computer program is a process that may have inputs and may have outputs');
    html_hr(parent);
    html_p_text(parent, 'suppose there is a process named console.log')
    html_p_text(parent, 'then we can write : ')
    app_learn_code_code_part_contrast(parent, 'console.log()');
    html_p_text(parent, 'right now there are no inputs for this process , so there is nothing in between the parenthesis')
    html_hr(parent);
    html_style_alternate(parent, html_p, [noop, html_style_bold], ['when a human writes a computer program&nbsp;, the human writes ', 'code']);
    html_hr(parent);
    html_p_text(parent, 'our first computer program will &nbsp;:');
    let ul1 = html_ul(parent);
    html_li_text(ul1, 'have no inputs');
    html_li_text(ul1, 'output a message');
    let container = html_div(parent);
    app_learn_code_style_rounded_padded(container);
    html_style(container, {
        'background-color': 'lightgray'
    });
    let {code} = app_learn_code_code_part_titled(container, 'code :', `console.log('hello');`, 'black');
    app_learn_code_style_code_color(code);
    html_hr(container);
    app_learn_code_code_part_titled(container, 'output :', `hello`, 'lightgreen');
}
