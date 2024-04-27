import {app_learn_code_eval_messages_to_string} from "./app_learn_code_eval_messages_to_string.mjs";
import {app_learn_code_eval} from "./app_learn_code_eval.mjs";
import {list_index} from "./list_index.mjs";
import {app_learn_code_code_part_title_output} from "./app_learn_code_code_part_title_output.mjs";
import {app_learn_code_code_part_title} from "./app_learn_code_code_part_title.mjs";
import {list_random_item} from "./list_random_item.mjs";
import {list_map} from "./list_map.mjs";
import {list_includes} from "./list_includes.mjs";
import {array_new} from "./array_new.mjs";
import {html_button_width_full_text_click} from "./html_button_width_full_text_click.mjs";
import {html_hr} from "./html_hr.mjs";
import {app_learn_code_code_part_titled_code} from "./app_learn_code_code_part_titled_code.mjs";
import {app_learn_code_code_container} from "./app_learn_code_code_container.mjs";
import {lesson_console_log_quiz_get} from "./lesson_console_log_quiz_get.mjs";
import {list_join} from "./list_join.mjs";
import {subtract} from "./subtract.mjs";
import {list_slice} from "./list_slice.mjs";
import {add} from "./add.mjs";
import {integer_random} from "./integer_random.mjs";
import {list_length} from "./list_length.mjs";
import {string_split_space} from "./string_split_space.mjs";
import {range} from "./range.mjs";
import {list_add} from "./list_add.mjs";
import {list_get} from "./list_get.mjs";
import {html_style_monospace} from "./html_style_monospace.mjs";
import {html_spacer_vertical} from "./html_spacer_vertical.mjs";
import {each_index} from "./each_index.mjs";
import {html_clear} from "./html_clear.mjs";
import {html_p_text} from "./html_p_text.mjs";
import {html_disable} from "./html_disable.mjs";
import { html_style } from "./html_style.mjs";
export function lesson_console_log_quiz(parent) {
    app_learn_code_quiz_inner(parent, lesson_console_log_quiz_get);
}
function app_learn_code_quiz_inner(parent, source_get) {
    refresh();
    function refresh() {
        html_clear(parent);
        html_p_text(parent, 'below is a quiz');
        html_p_text(parent, 'you can answer as many quiz questions as you want');
        html_p_text(parent, 'when you are done answering quiz questions , feel free to press the "next" button below');
        let container = app_learn_code_code_container(parent);
        let choices_count = 4;
        let r = range(choices_count);
        let choices = array_new();
        for (let c of r) {
            for (let i of range(100)) {
                let source = source_get();
                if (list_includes(choices, source)) {
                    continue;
                }
                list_add(choices, source);
                break;
            }
        }
        let mapped = list_map(choices, c => {
            let messages = app_learn_code_eval(c);
            return {
                source: c,
                messages
            };
        });
        let source = list_random_item(choices);
        let correct_index = list_index(choices, source);
        app_learn_code_code_part_titled_code(container, source);
        html_hr(container);
        app_learn_code_code_part_title(container, app_learn_code_code_part_title_output());
        each_index(mapped, (m, index) => {
            let { messages } = m;
            let joined = app_learn_code_eval_messages_to_string(messages);
            let button = html_button_width_full_text_click(container, joined, function on_click() {
                if (index === correct_index) {
                    html_style(button, {
                        'background-color': 'lightgreen'
                    });
                    setTimeout(() => {
                        refresh();
                    }, 200);
                } else {
                    html_disable(button);
                }
            });
            html_style_monospace(button);
            html_spacer_vertical(container);
        });
    }
}

