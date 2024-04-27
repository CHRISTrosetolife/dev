import {list_take} from "./list_take.mjs";
import {app_learn_code_code_part_titled_code} from "./app_learn_code_code_part_titled_code.mjs";
import {list_set} from "./list_set.mjs";
import {list_copy} from "./list_copy.mjs";
import {list_index_last} from "./list_index_last.mjs";
import {app_learn_code_code_part_titled_output} from "./app_learn_code_code_part_titled_output.mjs";
import {string_delimit} from "./string_delimit.mjs";
import {html_style_units} from "./html_style_units.mjs";
import {app_learn_code_style_code_color} from "./app_learn_code_style_code_color.mjs";
import {equal} from "./equal.mjs";
import {app_learn_code_code_background} from "./app_learn_code_code_background.mjs";
import {html_span_text} from "./html_span_text.mjs";
import {app_learn_code_code_part_generic} from "./app_learn_code_code_part_generic.mjs";
import {list_adder} from "./list_adder.mjs";
import {app_learn_code_eval_messages_to_string} from "./app_learn_code_eval_messages_to_string.mjs";
import {app_learn_code_eval} from "./app_learn_code_eval.mjs";
import {js_tokenize} from "./js_tokenize.mjs";
import {html_p_text} from "./html_p_text.mjs";
import {lesson_console_log_quiz_get} from "./lesson_console_log_quiz_get.mjs";
import {list_map} from "./list_map.mjs";
import {html_style} from "./html_style.mjs";
import {range} from "./range.mjs";
import {list_length} from "./list_length.mjs";
import {integer_random} from "./integer_random.mjs";
import {list_get} from "./list_get.mjs";
import {html_on_click} from "./html_on_click.mjs";
import {array_new} from "./array_new.mjs";
import {list_add} from "./list_add.mjs";
import {object_property_set} from "./object_property_set.mjs";
import {html_inner_set} from "./html_inner_set.mjs";
import {list_join} from "./list_join.mjs";
export function lesson_console_log_unscramble(parent) {
    refresh()
    function refresh() {
        let source = lesson_console_log_quiz_get();
        let messages = app_learn_code_eval(source);
        let joined = app_learn_code_eval_messages_to_string(messages);
        html_p_text(parent, 'below is another quiz');
        html_p_text(parent, 'you can take as many quizzes as you want');
        html_p_text(parent, 'when you are done , feel free to press the "next" button below');
        html_p_text(parent, 'write a program that outputs the following :');
        app_learn_code_code_part_titled_output(parent, joined);
        html_p_text(parent, 'tap or click each part of the program in the correct order');
        let {code} = app_learn_code_code_part_titled_code(parent, 'a');
        html_style(code, { visibility : 'hidden'})
        let tokens = list_adder(la => {
            for (let token of js_tokenize(source)) {
                la(token);
            }
        });
        let scrambled = list_map(tokens, t => {
            let {type} = t;
            let {label} = type;
            let {value} = t;
            if (equal(label, 'name')) {
                return value;
            }
            if (equal(label, 'string')) {
                return string_delimit(value);
            }
            return label;
        });
        let answer = list_copy(scrambled);
        let mapped_index_last = list_index_last(scrambled);
        for (let i of range(list_length(scrambled))) {
            let j = integer_random(i, mapped_index_last);
            let temp = list_get(scrambled, j);
            list_set(scrambled, j, list_get(scrambled, i));
            list_set(scrambled, i, temp);
        }
        let parts = array_new();
        let current_index = 0;
        for (let s of scrambled) {
            let part = app_learn_code_code_part_generic(html_span_text, parent, s, app_learn_code_code_background());
            list_add(parts, part);
            app_learn_code_style_code_color(part);
            html_style(part, {
                margin: html_style_units(3),
                display: 'inline-block',
                cursor: 'pointer'
            });
            html_on_click(part, () => {
                let current = list_get(answer, current_index);
                let e = equal(s, current);
                if (!e) {
                    html_style(part, {
                        'background-color': 'red'
                    });
                    return;
                }
                html_style(code, { visibility : 'visible'})
                for (let p of parts) {
                    html_style(p, {
                        'background-color': app_learn_code_code_background()
                    });
                }
                html_style(part, {
                    display: 'none'
                });
                current_index++;
                let sliced = list_take(answer, current_index);
                html_inner_set(code, list_join(sliced, ''));
                if (equal(current_index, list_length(answer))) {
                    refresh();
                }
            });
        }
    }
}
