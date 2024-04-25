import {html_img_width_full} from "./html_img_width_full.mjs";
import {html_style} from "./html_style.mjs";
import {html_p_text} from "./html_p_text.mjs";
import {html_element} from "./html_element.mjs";
import {object_property_set} from "./object_property_set.mjs";
import {string_combine} from "./string_combine.mjs";
export function lesson_console_log_analogy(parent) {
    html_p_text(parent, 'suppose there is paper');
    html_img_width_full(parent, 'paper.jpg');
    html_p_text(parent, 'and suppose someone folds the paper into origami');
    html_img_width_full(parent, 'paper_folding.jpg');
    html_p_text(parent, 'then afterward there is folded paper origami');
    html_img_width_full(parent, 'paper_folded.jpg');
    html_span_text(parent, 'we could say :');
    let ol = html_ul(parent);
    html_li_text(ol, 'the folding of the paper into origami is a process');
    html_li_text(ol, 'the');
    html_li_text(ol, 'an output');
}
