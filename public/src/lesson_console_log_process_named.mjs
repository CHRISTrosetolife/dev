import {app_learn_code_style_code_color} from "./app_learn_code_style_code_color.mjs";
import {app_learn_code_code_part} from "./app_learn_code_code_part.mjs";
import {html_li_text_monospace} from "./html_li_text_monospace.mjs";
import {html_style_alternate} from "./html_style_alternate.mjs";
import {mod} from "./mod.mjs";
import {each_index} from "./each_index.mjs";
import {html_p} from "./html_p.mjs";
import {html_style_monospace} from "./html_style_monospace.mjs";
import {noop} from "./noop.mjs";
import {html_li_text} from "./html_li_text.mjs";
import {html_ul} from "./html_ul.mjs";
import {html_p_text} from "./html_p_text.mjs";
import {html_hr} from "./html_hr.mjs";
import {html_span_text} from "./html_span_text.mjs";
import {list_length} from "./list_length.mjs";
import {list_get} from "./list_get.mjs";
import {html_style_bold} from "./html_style_bold.mjs";
export function lesson_console_log_process_named(parent) {
    html_p_text(parent, 'besides addition&nbsp;, there are other symbols / processes&nbsp;as well');
    html_p_text(parent, 'there is&nbsp;:');
    let ol3 = html_ul(parent);
    html_li_text(ol3, 'subtraction&nbsp;: 3 − 2 = 1');
    html_li_text(ol3, 'multiplication&nbsp;: 3 × 2 = 6');
    html_li_text(ol3, 'division&nbsp;: 6 ÷ 3 = 2');
    html_hr(parent);
    html_p_text(parent, 'instead of symbols , we can write the name of the process&nbsp;:');
    let ol5 = html_ul(parent);
    html_li_text(ol5, 'addition&nbsp;: add(1, 2) = 3');
    html_li_text(ol5, 'subtraction&nbsp;: subtract(3, 2) = 1');
    html_li_text(ol5, 'multiplication&nbsp;: multiply(3, 2) = 6');
    html_li_text(ol5, 'division&nbsp;: divide(8, 4) = 2');
    html_p_text(parent, 'after the name of the process , we write a pair of parenthesis like this : process_name()');
    html_p_text(parent, 'inside the parenthesis , we write the inputs to the process separated by commas like this : process_name(input1, input2)');
    html_p_text(parent, 'notice that a comma ( , ) separates the inputs');
    html_hr(parent);
    html_style_alternate(parent, html_p, [noop, html_style_bold], ['in computers different symbols can be used as a ', 'separator', ' so that the computer can tell two things apart']);
    html_style_alternate(parent, html_p, [noop, html_style_bold], ['we will be learning a computer programming language called ', 'javascript']);
    html_style_alternate(parent, html_p, [noop, html_style_monospace], ['in javascript a semicolon ( ', ';', ' ) is a separator']);
    html_hr(parent);
    html_style_alternate(parent, html_p, [noop, html_style_bold], ['here are some examples of a ', 'string', ' ( a string is text like letters and symbols ) in javascript :']);
    app_learn_code_code_part_contrast(parent, '\'hello\'');
    app_learn_code_code_part_contrast(ol4, '\'strings can have spaces\'');
    app_learn_code_code_part_contrast(ol4, '\'strings can have numbers like : 123\'');
    app_learn_code_code_part_contrast(ol4, '\'strings can have numbers like 123\'');
    html_style_alternate(parent, html_p, [noop, html_style_monospace], ['notice that the beginning of a string has a quote ( ', '\'', ' ) and so does the end of a string']);
}
function app_learn_code_code_part_contrast(parent, code) {
    let component = app_learn_code_code_part(parent, code, 'black');
    app_learn_code_style_code_color(component);
}

