import {html_style_monospace} from "./html_style_monospace.mjs";
import {noop} from "./noop.mjs";
import {html_p} from "./html_p.mjs";
import {html_style_alternate} from "./html_style_alternate.mjs";
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
import {app_learn_code_code_part_contrast} from "./app_learn_code_code_part_contrast.mjs";
import { html_spacer_vertical } from "./html_spacer_vertical.mjs";
export function lesson_log_number_example(parent) {
    html_style_alternate(parent, html_p, [noop, html_style_monospace], ['remember , strings need quotes ( ', '\'', ' ) :']);
    app_learn_code_code_part_contrast(parent, '\'text\'');
    html_p_text(parent, 'however , numbers do not need quotes :')
    app_learn_code_code_part_contrast(parent, '0');
    html_spacer_vertical(parent)
    app_learn_code_code_part_contrast(parent, '12');
    html_spacer_vertical(parent)
    app_learn_code_code_part_contrast(parent, '345');
    html_p_text(parent, 'sometimes people write numbers with commas separating the digits , like 1,000 and 23,467')
    html_p_text(parent, 'in javascript numbers are not written with commas :')
    app_learn_code_code_part_contrast(parent, '1000');
    html_spacer_vertical(parent)
    app_learn_code_code_part_contrast(parent, '23467');
    html_p_text(parent, 'numbers can have a negative sign :')
    app_learn_code_code_part_contrast(parent, '-6');
    html_spacer_vertical(parent)
    app_learn_code_code_part_contrast(parent, '-7890');
    html_p_text(parent, 'numbers can have a decimal point :')
    app_learn_code_code_part_contrast(parent, '6.7');
    html_spacer_vertical(parent)
    app_learn_code_code_part_contrast(parent, '8901.23');
}
