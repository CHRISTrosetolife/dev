import {html_style_hidden} from "./html_style_hidden.mjs";
import {list_empty_is} from "./list_empty_is.mjs";
import {null_not_is} from "./null_not_is.mjs";
import {app_learn_code_source_to_tokens} from "./app_learn_code_source_to_tokens.mjs";
import {app_learn_code_source_variations} from "./app_learn_code_source_variations.mjs";
import {app_learn_code_answer_correct} from "./app_learn_code_answer_correct.mjs";
import {list_scramble} from "./list_scramble.mjs";
import {string_take} from "./string_take.mjs";
import {list_take} from "./list_take.mjs";
import {app_learn_code_code_part_titled_code} from "./app_learn_code_code_part_titled_code.mjs";
import {list_copy} from "./list_copy.mjs";
import {app_learn_code_code_part_titled_output} from "./app_learn_code_code_part_titled_output.mjs";
import {html_style_units} from "./html_style_units.mjs";
import {app_learn_code_style_code_color} from "./app_learn_code_style_code_color.mjs";
import {equal} from "./equal.mjs";
import {app_learn_code_code_background} from "./app_learn_code_code_background.mjs";
import {html_span_text} from "./html_span_text.mjs";
import {app_learn_code_code_part_generic} from "./app_learn_code_code_part_generic.mjs";
import {app_learn_code_eval_messages_to_string} from "./app_learn_code_eval_messages_to_string.mjs";
import {app_learn_code_eval} from "./app_learn_code_eval.mjs";
import {html_p_text} from "./html_p_text.mjs";
import {list_map} from "./list_map.mjs";
import {html_style} from "./html_style.mjs";
import {list_length} from "./list_length.mjs";
import {list_get} from "./list_get.mjs";
import {html_on_click} from "./html_on_click.mjs";
import {array_new} from "./array_new.mjs";
import {list_add} from "./list_add.mjs";
import {html_inner_set} from "./html_inner_set.mjs";
import {html_clear} from "./html_clear.mjs";
import {add} from "./add.mjs";
import {string_length} from "./string_length.mjs";
import {html_div} from "./html_div.mjs";
import {html_button_width_full_text_click} from "./html_button_width_full_text_click.mjs";
import {html_style_centered} from "./html_style_centered.mjs";
import {list_first} from "./list_first.mjs";
import {add_1} from "./add_1.mjs";
import {list_concat} from "./list_concat.mjs";
import {list_equal} from "./list_equal.mjs";
import {list_filter} from "./list_filter.mjs";
import {html_style_background_color} from "./html_style_background_color.mjs";
import {app_learn_code_range_retry} from "./app_learn_code_range_retry.mjs";
import {equal_not} from "./equal_not.mjs";
export function app_learn_code_unscramble(source_get) {
    return function app_learn_code_unscramble_inner(parent) {
        let previous;
        let div = html_div(parent);
        refresh();
        function refresh() {
            html_clear(div);
            let source;
            for (let i of app_learn_code_range_retry()) {
                source = source_get();
                if (equal_not(source, previous)) {
                    break;
                }
            }
            previous = source;
            let variations = app_learn_code_source_variations(source);
            source = list_first(variations);
            let messages = app_learn_code_eval(source);
            let joined = app_learn_code_eval_messages_to_string(messages);
            html_p_text(div, 'below is another quiz');
            html_p_text(div, 'write a program that outputs the following :');
            app_learn_code_code_part_titled_output(div, joined);
            html_p_text(div, 'tap or click each part of the program in the correct order');
            let {code} = app_learn_code_code_part_titled_code(div, 'a');
            html_style_hidden(code);
            let success = html_div(div);
            let answers = list_map(variations, v => {
                return {
                    tokens: app_learn_code_source_to_tokens(v),
                    source: v
                };
            });
            let answer = app_learn_code_source_to_tokens(source);
            let scrambled = list_copy(answer);
            list_scramble(scrambled);
            let parts = array_new();
            let current_index = 0;
            let choices = array_new();
            for (let s of scrambled) {
                let part = app_learn_code_code_part_generic(html_span_text, div, s, app_learn_code_code_background());
                list_add(parts, part);
                app_learn_code_style_code_color(part);
                html_style(part, {
                    margin: html_style_units(3),
                    display: 'inline-block',
                    cursor: 'pointer',
                    'min-width': html_style_units(15)
                });
                html_style_centered(part);
                html_on_click(part, () => {
                    let mapped = list_map(answers, a => {
                        let {tokens} = a;
                        let expected = list_take(tokens, add_1(current_index));
                        let actual = list_concat(choices, [s]);
                        if (list_equal(expected, actual)) {
                            return a;
                        }
                        return null;
                    });
                    let filtered = list_filter(mapped, m => null_not_is(m));
                    if (list_empty_is(filtered)) {
                        html_style_background_color(part, 'darkred');
                        return;
                    }
                    let first = list_first(filtered);
                    let {tokens} = first;
                    let current = list_get(tokens, current_index);
                    list_add(choices, s);
                    html_style(code, {
                        visibility: 'visible'
                    });
                    for (let p of parts) {
                        html_style_background_color(p, app_learn_code_code_background());
                    }
                    html_style(part, {
                        display: 'none'
                    });
                    let first_source = first.source;
                    current_index++;
                    let source_index = 0;
                    let c_previous;
                    for (let c of choices) {
                        source_index = first_source.indexOf(c, source_index);
                        c_previous = c;
                    }
                    let take_count = add(source_index, string_length(current.toString()));
                    html_inner_set(code, string_take(first_source, take_count));
                    if (equal(current_index, list_length(answer))) {
                        html_style_background_color(code, 'darkgreen');
                        app_learn_code_answer_correct(success);
                        html_p_text(success, 'if you want to take another quiz , press the "another quiz" button below : ');
                        html_p_text(success, 'otherwise , press the "next" button below');
                        html_button_width_full_text_click(success, 'another quiz', refresh);
                    }
                });
            }
        }
    };
}
