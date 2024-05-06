import {app_learn_code_range_retry} from "./app_learn_code_range_retry.mjs";
import {app_learn_code_retry_count} from "./app_learn_code_retry_count.mjs";
import {app_learn_code_answer_correct} from "./app_learn_code_answer_correct.mjs";
import {list_get} from "./list_get.mjs";
import {list_random_index} from "./list_random_index.mjs";
import {app_learn_code_style_success} from "./app_learn_code_style_success.mjs";
import {equal} from "./equal.mjs";
import {list_any} from "./list_any.mjs";
import {app_learn_code_eval_to_string} from "./app_learn_code_eval_to_string.mjs";
import {html_spacer_vertical} from "./html_spacer_vertical.mjs";
import {html_style_monospace} from "./html_style_monospace.mjs";
import {html_disable} from "./html_disable.mjs";
import {html_style} from "./html_style.mjs";
import {html_button_width_full_text_click} from "./html_button_width_full_text_click.mjs";
import {app_learn_code_eval_messages_to_string} from "./app_learn_code_eval_messages_to_string.mjs";
import {each_index} from "./each_index.mjs";
import {app_learn_code_code_part_title_output} from "./app_learn_code_code_part_title_output.mjs";
import {app_learn_code_code_part_title} from "./app_learn_code_code_part_title.mjs";
import {html_hr} from "./html_hr.mjs";
import {app_learn_code_code_part_titled_code} from "./app_learn_code_code_part_titled_code.mjs";
import {list_index} from "./list_index.mjs";
import {list_random_item} from "./list_random_item.mjs";
import {app_learn_code_eval} from "./app_learn_code_eval.mjs";
import {list_map} from "./list_map.mjs";
import {list_add} from "./list_add.mjs";
import {list_includes} from "./list_includes.mjs";
import {array_new} from "./array_new.mjs";
import {range} from "./range.mjs";
import {app_learn_code_code_container} from "./app_learn_code_code_container.mjs";
import {html_p_text} from "./html_p_text.mjs";
import {html_clear} from "./html_clear.mjs";
import {html_div} from "./html_div.mjs";
import {list_sort} from "./list_sort.mjs";
import {list_sort_string} from "./list_sort_string.mjs";
import {app_learn_code_style_rounded_padded} from "./app_learn_code_style_rounded_padded.mjs";
import {html_style_units} from "./html_style_units.mjs";
export function app_learn_code_quiz_inner(parent, source_get) {
    let previous;
    let div = html_div(parent);
    refresh(false);
    function refresh(refreshed) {
        html_clear(div);
        html_p_text(div, 'below is a quiz');
        html_p_text(div, 'choose the correct output for the code');
        let container = app_learn_code_code_container(div);
        let choices_count = 4;
        let r = range(choices_count);
        let choices = array_new();
        for (let c of r) {
            for (let i of app_learn_code_range_retry()) {
                let source = source_get();
                let answer = app_learn_code_eval_to_string(source);
                if (list_any(choices, c => equal(c.answer, answer))) {
                    continue;
                }
                if (equal(source,previous)) {
                    continue;
                }
                list_add(choices, {
                    source,
                    answer
                });
                break;
            }
        }
        list_sort_string(choices, c => c.answer);
        let correct_index = list_random_index(choices);
        let {source} = list_get(choices, correct_index);
        previous = source;
        app_learn_code_code_part_titled_code(container, source);
        html_hr(container);
        app_learn_code_code_part_title(container, app_learn_code_code_part_title_output());
        each_index(choices, (c, index) => {
            let {answer} = c;
            let button = html_button_width_full_text_click(container, answer, function on_click() {
                if (index === correct_index) {
                    app_learn_code_style_success(button);
                    setTimeout(() => {
                        refresh(true);
                        container_bottom_show();
                    }, 200);
                } else {
                    container_bottom_hide();
                    html_disable(button);
                    html_style(button, {
                        'background-color': 'salmon',
                        'border-color': 'tomato'
                    });
                }
            });
            html_style_monospace(button);
        });
        let container_bottom = html_div(div);
        if (!refreshed) {
            container_bottom_hide();
        }
        app_learn_code_answer_correct(container_bottom);
        html_p_text(container_bottom, 'if you want , take another quiz above');
        html_p_text(container_bottom, 'otherwise , press the "next" button below');
        function container_bottom_hide() {
            html_style(container_bottom, {
                display: 'none'
            });
        }
        function container_bottom_show() {
            html_style(container_bottom, {
                display: 'block'
            });
        }
    }
}
