import {html_style_button_default_border_color} from "./html_style_button_default_border_color.mjs";
import {html_scroll_top} from "./html_scroll_top.mjs";
import {string_multiply} from "./string_multiply.mjs";
import {each_reverse} from "./each_reverse.mjs";
import {round} from "./round.mjs";
import {number_string_to} from "./number_string_to.mjs";
import {divide} from "./divide.mjs";
import {square} from "./square.mjs";
import {html_style_button_default_border} from "./html_style_button_default_border.mjs";
import {multiply} from "./multiply.mjs";
import {subtract_1} from "./subtract_1.mjs";
import {add_1} from "./add_1.mjs";
import {html_style_button_default} from "./html_style_button_default.mjs";
import {lesson_statements_two} from "./lesson_statements_two.mjs";
import {lesson_multiply} from "./lesson_multiply.mjs";
import {lesson_subtract} from "./lesson_subtract.mjs";
import {lesson_add} from "./lesson_add.mjs";
import {lesson_log_number} from "./lesson_log_number.mjs";
import {list_add_multiple} from "./list_add_multiple.mjs";
import {html_style_default} from "./html_style_default.mjs";
import {html_disable} from "./html_disable.mjs";
import {html_enable} from "./html_enable.mjs";
import {string_prefix_without} from "./string_prefix_without.mjs";
import {html_button_width_full_text_click} from "./html_button_width_full_text_click.mjs";
import {html_on_click} from "./html_on_click.mjs";
import {html_div} from "./html_div.mjs";
import {equal} from "./equal.mjs";
import {html_clear} from "./html_clear.mjs";
import {html_button_width_full_text} from "./html_button_width_full_text.mjs";
import {list_get} from "./list_get.mjs";
import {html_button_width_full} from "./html_button_width_full.mjs";
import {lesson_console_log} from "./lesson_console_log.mjs";
import {list_first} from "./list_first.mjs";
import {object_property_get} from "./object_property_get.mjs";
import {html_document_body} from "./html_document_body.mjs";
import {html_inner_set} from "./html_inner_set.mjs";
import {list_length} from "./list_length.mjs";
import {list_index_last} from "./list_index_last.mjs";
import {html_style} from "./html_style.mjs";
import {object_merge} from "./object_merge.mjs";
import {list_add} from "./list_add.mjs";
import {lesson_divide} from "./lesson_divide.mjs";
import {app_learn_code_style_rounded_padded_style} from "./app_learn_code_style_rounded_padded_style.mjs";
import {html_hr} from "./html_hr.mjs";
import {string_combine} from "./string_combine.mjs";
import {noop} from "./noop.mjs";
import {html_p_text} from "./html_p_text.mjs";
import {list_index} from "./list_index.mjs";
import {list_take} from "./list_take.mjs";
import {list_sum} from "./list_sum.mjs";
import {each_index} from "./each_index.mjs";
import {add} from "./add.mjs";
import {html_spacer_vertical} from "./html_spacer_vertical.mjs";
import {html_span_text} from "./html_span_text.mjs";
import {html_style_bold} from "./html_style_bold.mjs";
import {lesson_statements_three} from "./lesson_statements_three.mjs";
import {lesson_less_than} from "./lesson_less_than.mjs";
import {range} from "./range.mjs";
export function app_learn_code() {
    let root = html_document_body();
    html_style(root, {
        'font-family': 'sans-serif'
    });
    let default_font_size = 3;
    object_merge(html_style_default(), {
        'font-size': string_combine(default_font_size.toString(), 'vh')
    });
    object_merge(html_style_button_default(), app_learn_code_style_rounded_padded_style());
    object_merge(html_style_button_default(), {
        'margin': '0.5vh',
        'background-color': 'lightblue'
    });
    object_merge(html_style_button_default(), html_style_button_default_border());
    let lesson_creates = [];
    list_add(lesson_creates, lesson_console_log);
    list_add(lesson_creates, lesson_log_number);
    list_add(lesson_creates, lesson_add);
    list_add(lesson_creates, lesson_subtract);
    list_add(lesson_creates, lesson_multiply);
    list_add(lesson_creates, lesson_divide);
    list_add(lesson_creates, lesson_less_than);
    list_add(lesson_creates, lesson_statements_two);
    list_add(lesson_creates, lesson_statements_three);
    let lesson_screens = [];
    let lessons = [];
    for (let lesson_create of lesson_creates) {
        let lesson = lesson_create();
        list_add(lessons, lesson);
        let s = object_property_get(lesson, 'screens');
        list_add_multiple(lesson_screens, s);
    }
    function refresh_settings() {
        clear_scroll();
        button_home_hr();
        let base = 16;
        let max_rgb = square(base) - 1;
        let max = 20;
        each_reverse(range(add_1(max)), i => {
            let percent = divide(i, max);
            let product = multiply(percent, max_rgb);
            let rounded = round(product);
            let rgb_part = number_string_to(rounded, base);
            let parts = 3;
            let rgb = string_multiply(rgb_part, parts);
            let color = string_combine('#', rgb);
            console.log({
                percent,
                rgb_part
            });
            let change = html_button_width_full_text_click(root, string_combine('color : ', color), () => html_style(root, {
                'background-color': color
            }));
            html_style(change, {
                'color': html_style_button_default_border_color(),
                'background-color': color
            });
        });
    }
    function refresh_main() {
        clear_scroll();
        html_button_width_full_text_click(root, '⚙️ settings', refresh_settings);
        html_p_text(root, 'if you want to start from beginning , choose "begin" : ');
        let begin = html_button_width_full_text_click(root, '🚀 begin', async () => await refresh_lesson_screen(0));
        html_style(begin, {
            'font-size': string_combine(multiply(default_font_size, 1.2).toString(), 'vh')
        });
        html_style_bold(begin);
        html_p_text(root, 'or choose a lesson below :');
        for (let lesson of lessons) {
            let {description} = lesson;
            html_button_width_full_text_click(root, description, () => refresh_lesson(lesson));
        }
    }
    refresh_main();
    let index_last = list_index_last(lesson_screens);
    function clear_scroll() {
        html_clear(root);
        html_scroll_top();
    }
    function refresh_lesson(lesson) {
        clear_scroll();
        button_home_hr();
        let lesson_index = list_index(lessons, lesson);
        let previous = list_take(lessons, lesson_index);
        let index_first = list_sum(s => {
            for (let p of previous) {
                let {screens} = p;
                s(list_length(screens));
            }
        });
        let {screens} = lesson;
        each_index(screens, (screen, index) => {
            let message = string_combine('screen ', add_1(index));
            let button = html_button_width_full_text_click(root, '', async () => await refresh_lesson_screen(add(index_first, index)));
            if (equal(index, 0)) {
                let begin_lesson = html_span_text(button, `begin the lesson`);
                html_style_bold(begin_lesson);
                html_span_text(button, ` ( ${message} )`);
            } else {
                html_span_text(button, message);
            }
        });
    }
    function button_home_hr() {
        button_home();
        html_hr(root);
    }
    async function refresh_lesson_screen(index) {
        clear_scroll();
        let lesson_screen = list_get(lesson_screens, index);
        await lesson_screen(root);
        html_hr(root);
        let button_next = html_button_width_full_text_click(root, '➡️ next', async function on_click() {
            await refresh_lesson_screen(add_1(index));
        });
        let button_previous = html_button_width_full_text_click(root, '⬅️ previous', async function on_click() {
            await refresh_lesson_screen(subtract_1(index));
        });
        if (equal(index, 0)) {
            html_disable(button_previous);
        }
        if (equal(index, index_last)) {
            html_disable(button_next);
        }
        html_spacer_vertical(root);
        html_spacer_vertical(root);
        button_home();
    }
    function button_home() {
        html_button_width_full_text_click(root, '🏠 go back home', function on_click() {
            refresh_main();
        });
    }
}
