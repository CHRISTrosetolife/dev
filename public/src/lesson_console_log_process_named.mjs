import {html_li_text} from "./html_li_text.mjs";
import {html_ul} from "./html_ul.mjs";
import {html_p_text} from "./html_p_text.mjs";
import {html_hr} from "./html_hr.mjs";
export function lesson_console_log_process_named(parent) {
    html_p_text(parent, 'besides addition&nbsp;, there are other symbols / processes&nbsp;as well');
    html_p_text(parent, 'for example , there is&nbsp;:');
    let ol3 = html_ul(parent);
    html_li_text(ol3, 'subtraction&nbsp;: 3 − 2 = 1');
    html_li_text(ol3, 'multiplication&nbsp;: 3 × 2 = 6');
    html_li_text(ol3, 'division&nbsp;: 6 ÷ 3 = 2');
    html_hr(parent);
    html_p_text(parent, 'instead of symbols ( + , − , × , ÷ ) , we can write the name of the process&nbsp;:');
    let ol5 = html_ul(parent);
    html_li_text(ol5, 'add(1, 2) = 3');
    html_li_text(ol5, 'subtract(3, 2) = 1');
    html_li_text(ol5, 'multiply(3, 2) = 6');
    html_li_text(ol5, 'divide(6, 3) = 2');
    html_p_text(parent, 'after the name of the process , we write a pair of parentheses like this : process_name()');
    html_p_text(parent, 'inside the parentheses , we write any inputs to the process separated by commas like this : process_name(input1, input2)');
    html_p_text(parent, 'notice that a comma ( , ) separates the inputs');
}
