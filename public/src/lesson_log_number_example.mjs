import {lesson_log_number_quiz} from "./lesson_log_number_quiz.mjs";
import {random_50_50} from "./random_50_50.mjs";
import {app_learn_code_code} from "./app_learn_code_code.mjs";
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
import {html_spacer_vertical} from "./html_spacer_vertical.mjs";
import {html_button_width_full_text_click} from "./html_button_width_full_text_click.mjs";
import {integer_random} from "./integer_random.mjs";
import {html_clear} from "./html_clear.mjs";
import {list_random_item} from "./list_random_item.mjs";
export function lesson_log_number_example(source_get, message) {
    return parent => {
        refresh();
        function refresh() {
            html_clear(parent);
            html_p_text(parent, 'below is an example computer program ' + message);
            html_p_text(parent, 'if you want to see another example , press the "another example" button below');
            let source = lesson_log_number_quiz();
            app_learn_code_code(parent, source);
            html_button_width_full_text_click(parent, 'another example', refresh);
        }
    }
}
