import {app_learn_code_code_part_contrast} from "./app_learn_code_code_part_contrast.mjs";
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
import {app_learn_code_code_part_titled} from "./app_learn_code_code_part_titled.mjs";
import {html_style_monospace} from "./html_style_monospace.mjs";
export function lesson_console_log_process_computer_program(parent) {
    html_p_text(parent, 'a computer program may have inputs');
    html_p_text(parent, 'a computer program may have outputs');
    html_p_text(parent, 'a computer program does something&nbsp;, using any inputs and producing any outputs');
    html_p_text(parent, 'we could say a computer program is a process that may have inputs and may have outputs');
    html_hr(parent);
    html_style_alternate(parent, html_p, [noop, html_style_monospace], ['suppose there is a process named ', 'console.log']);
    html_p_text(parent, 'then we can write : ');
    app_learn_code_code_part_contrast(parent, 'console.log()');
    html_p_text(parent, 'right now there are no inputs for this process , so there is nothing in between the parentheses');
    html_style_alternate(parent, html_p, [noop, html_style_monospace], 
    ['suppose there is a string ', '\'hello\'']);
    html_style_alternate(parent, html_p, [noop, html_style_monospace], 
    ['suppose the string ', '\'hello\'', ' is an input to the ', 'console.log', ' process']);
    html_p_text(parent, 'then we can write : ');
    app_learn_code_code_part_contrast(parent, 'console.log(\'hello\')');
    html_p_text(parent, 'this is almost a finished computer program');
    html_p_text(parent, 'to finish this computer computer program we should add a semicolon separator to the end');
    html_p_text(parent, 'here is the finished computer program and the output of the computer program :');
    html_style_alternate(parent, html_p, [noop, html_style_bold], ['( when a human writes a computer program&nbsp;, the human writes ', 'code', ' )']);
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
