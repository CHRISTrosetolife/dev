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
export function lesson_console_log_analogy(parent) {
    lesson_console_log_analogy_1(parent);
    html_hr(parent);
    html_p_text(parent, 'we could say :');
    let ol = html_ul(parent);
    let li1 = html_li(ol);
    html_span_text(li1, 'the folding of the paper into origami is a ');
    html_strong_text(li1, 'process');
    let li2 = html_li(ol);
    html_span_text(li2, 'the unfolded paper is the ');
    html_strong_text(li2, 'input');
    html_span_text(li2, ' to the folding process');
    let li3 = html_li(ol);
    html_span_text(li3, 'the folded paper is the ');
    html_strong_text(li3, 'output');
    html_span_text(li3, ' of the folding process');
    html_hr(parent);
    html_p_text(parent, 'suppose two numbers are added together to produce their sum');
    
}
function lesson_console_log_analogy_1(parent) {
    html_p_text(parent, 'suppose there is paper');
    html_img_width_full(parent, 'paper.jpg');
    html_p_text(parent, 'and suppose someone folds the paper into origami');
    html_img_width_full(parent, 'paper_folding.jpg');
    html_p_text(parent, 'then afterward there is folded paper origami');
    html_img_width_full(parent, 'paper_folded.jpg');
}

