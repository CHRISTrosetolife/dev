import {html_li_text} from "./html_li_text.mjs";
import {html_ul} from "./html_ul.mjs";
import {html_p_text} from "./html_p_text.mjs";
import { html_hr } from "./html_hr.mjs";
export function lesson_console_log_analogy_addition(parent) {
    html_p_text(parent, 'suppose two numbers are added together to get their sum');
    html_p_text(parent, 'we could say :');
    let ol1 = html_ul(parent);
    html_li_text(ol1, 'the adding of the two numbers together is a process');
    html_li_text(ol1, 'the two numbers are the inputs to the addition process');
    html_li_text(ol1, 'the sum of the two numbers is the output of the addition process');
    html_hr(parent)
    html_p_text(parent, 'suppose the letters "a", "b" and "c" represent numbers');
    html_p_text(parent, 'suppose "c" is the sum of "a" and "b"');
    html_p_text(parent, 'then here is the equation : a + b = c');
    html_p_text(parent, 'we could say :');
    let ol2 = html_ul(parent);
    html_li_text(ol2, 'the addition sign ( "+" ) is a process');
    html_li_text(ol2, '"a" and "b" are the inputs to the "+" process');
    html_li_text(ol2, '"c" is the output of the "+" process');
    html_hr(parent)
    html_p_text(parent, 'besides addition&nbsp;, there are other symbols / processes&nbsp;as well');
    html_p_text(parent, 'there is&nbsp;:');
    let ol3 = html_ul(parent);
    html_li_text(ol3, 'subtraction&nbsp;: 3 - 2 = 1');
    html_li_text(ol3, 'multiplication&nbsp;: 3 x 2 = 6');
   
}
