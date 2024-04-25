import {html_strong_text} from "./html_strong_text.mjs";
import {html_span_text} from "./html_span_text.mjs";
import {html_li} from "./html_li.mjs";
import {html_ul} from "./html_ul.mjs";
import {html_p_text} from "./html_p_text.mjs";
export function lesson_console_log_analogy_2(parent) {
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
}
