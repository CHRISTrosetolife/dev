import {app_learn_code_quiz_inner_refresh} from "./app_learn_code_quiz_inner_refresh.mjs";
import {html_style_display_block} from "./html_style_display_block.mjs";
import {html_style_display_none} from "./html_style_display_none.mjs";
import {app_learn_code_answer_correct} from "./app_learn_code_answer_correct.mjs";
import {html_p_text} from "./html_p_text.mjs";
import {html_div} from "./html_div.mjs";
export function app_learn_code_quiz_inner(parent, source_get) {
    let previous;
    let div = html_div(parent);
    refresh(false);
    function refresh(refreshed) {
        previous = app_learn_code_quiz_inner_refresh(div, source_get, previous, on_success, container_bottom_hide);
        let container_bottom = html_div(div);
        if (!refreshed) {
            container_bottom_hide();
        }
        app_learn_code_answer_correct(container_bottom);
        html_p_text(container_bottom, 'if you want , take another quiz above');
        html_p_text(container_bottom, 'otherwise , press the "next" button below');
        function container_bottom_hide() {
            html_style_display_none(container_bottom);
        }
        function container_bottom_show() {
            html_style_display_block(container_bottom);
        }
        function on_success() {
            refresh(true);
            container_bottom_show();
        }
    }
}
