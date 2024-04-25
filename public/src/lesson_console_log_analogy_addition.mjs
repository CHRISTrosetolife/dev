import {lesson_console_log_analogy_2} from "./lesson_console_log_analogy_2.mjs";
import {lesson_console_log_analogy_1} from "./lesson_console_log_analogy_1.mjs";
import {html_hr} from "./html_hr.mjs";
import {html_strong_text} from "./html_strong_text.mjs";
import {html_li} from "./html_li.mjs";
import {html_li_text} from "./html_li_text.mjs";
import {html_ul} from "./html_ul.mjs";
import {html_span_text} from "./html_span_text.mjs";
import {html_img_width_full} from "./html_img_width_full.mjs";
import {html_style} from "./html_style.mjs";
import {html_p_text} from "./html_p_text.mjs";
import {html_element} from "./html_element.mjs";
import {object_property_set} from "./object_property_set.mjs";
import {string_combine} from "./string_combine.mjs";
export function lesson_console_log_analogy_addition(parent) {
    lesson_console_log_analogy_1(parent);
    html_hr(parent);
    lesson_console_log_analogy_2(parent);
    html_hr(parent);
    html_p_text(parent, 'suppose two numbers are added together to get their sum');
    html_p_text(parent, 'we could say :');
    let ol = html_ul(parent);
    html_li_text(ol, 'the adding of the two numbers together is a process');
    html_li_text(ol, 'the two numbers are the inputs to the addition process');
    html_li_text(ol, 'the sum of the two numbers is the output of the addition process');
}
