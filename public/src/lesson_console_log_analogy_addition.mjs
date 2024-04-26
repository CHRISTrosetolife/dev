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
import { list_get } from "./list_get.mjs";
export function lesson_console_log_analogy_addition(parent) {
    html_p_text(parent, 'suppose two numbers are added together to get their sum');
    html_p_text(parent, 'we could say :');
    let ol1 = html_ul(parent);
    html_li_text(ol1, 'the adding of the two numbers together is a process');
    html_li_text(ol1, 'the two numbers are the inputs to the addition process');
    html_li_text(ol1, 'the sum of the two numbers is the output of the addition process');
    html_hr(parent);
    html_p_text(parent, 'suppose the letters "a", "b" and "c" represent numbers');
    html_p_text(parent, 'suppose "c" is the sum of "a" and "b"');
    html_p_text(parent, 'then here is the equation : a + b = c');
    html_p_text(parent, 'we could say :');
    let ol2 = html_ul(parent);
    html_li_text(ol2, 'the addition sign ( "+" ) is a process');
    html_li_text(ol2, '"a" and "b" are the inputs to the "+" process');
    html_li_text(ol2, '"c" is the output of the "+" process');
    html_hr(parent);
    html_p_text(parent, 'besides addition&nbsp;, there are other symbols / processes&nbsp;as well');
    html_p_text(parent, 'there is&nbsp;:');
    let ol3 = html_ul(parent);
    html_li_text(ol3, 'subtraction&nbsp;: 3 - 2 = 1');
    html_li_text(ol3, 'multiplication&nbsp;: 3 × 2 = 6');
    html_li_text(ol3, 'division&nbsp;: 6 ÷ 3 = 2');
    html_p_text(parent, 'instead of symbols , we can write out the name of the process');
    html_p_text(parent, 'after the name of the process , we write a pair of parenthesis like this : process_name()');
    html_p_text(parent, 'inside the parenthesis , we write the inputs to the process separated by commas like this : process_name(input1, input2)');
    let ol4 = html_ul(parent);
    html_li_text(ol4, 'addition&nbsp;: add(1, 2) = 3');
    html_li_text(ol4, 'subtraction&nbsp;: subtract(3, 2) = 1');
    html_li_text(ol4, 'multiplication&nbsp;: multiply(3, 2) = 6');
    html_li_text(ol4, 'division&nbsp;: divide(8, 4) = 2');
    html_p_text(parent, 'notice that a comma ( , ) separates the inputs');
    html_p_text(parent, 'in computers different symbols can be used as a separator so that the computer can tell two things apart');
    let create = html_p;
    let p1 = create(parent);
    let patterns = [noop, html_style_monospace];
    let strings = ['in javascript a semicolon ( ', ';', ') is a separator'];
    let patterns_length = list_length(patterns);
    each_index(strings, (element, index) => {
        let span = html_span_text(p1, element)
        let pattern_index = mod(index, patterns_length);
        let pattern = list_get(patterns, pattern_index)
        pattern(span)
    });
}
