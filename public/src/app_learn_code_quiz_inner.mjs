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
export function app_learn_code_quiz_inner(parent, source_get) {
    refresh(false);
    function refresh(refreshed) {
        html_clear(parent);
        html_p_text(parent, 'below is a quiz');
        html_p_text(parent, 'click or tap on the correct output for the code');
        let container = app_learn_code_code_container(parent);
        let choices_count = 4;
        let r = range(choices_count);
        let choices = array_new();
        for (let c of r) {
            for (let i of range(100)) {
                let source = source_get();
                let answer = app_learn_code_eval_to_string(source);
                if (list_any(choices, c => equal(c, answer))) {
                    continue;
                }
                list_add(choices, answer);
                break;
            }
        }
        let source = list_random_item(choices);
        let correct_index = list_index(choices, source);
        app_learn_code_code_part_titled_code(container, source);
        html_hr(container);
        app_learn_code_code_part_title(container, app_learn_code_code_part_title_output());
        each_index(choices, (answer, index) => {
            let button = html_button_width_full_text_click(container, answer, function on_click() {
                if (index === correct_index) {
                    html_style(button, {
                        'background-color': 'lightgreen'
                    });
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
        let container_bottom = html_div(parent);
        if (!refreshed) {
            container_bottom_hide();
        }
        html_p_text(container_bottom, 'your answer is correct');
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
