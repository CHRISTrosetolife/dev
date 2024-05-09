import {app_learn_code_modules} from "./app_learn_code_modules.mjs";
import {app_learn_code_style_code_colored} from "./app_learn_code_style_code_colored.mjs";
import {noop} from "./noop.mjs";
import {html_style_alternate} from "./html_style_alternate.mjs";
import {html_style_alternate_split} from "./html_style_alternate_split.mjs";
import {html_style_default_font_size_value} from "./html_style_default_font_size_value.mjs";
import {html_style_default_initialize} from "./html_style_default_initialize.mjs";
import {html_hash} from "./html_hash.mjs";
import {string_combine_multiple} from "./string_combine_multiple.mjs";
import {html_scroll_top} from "./html_scroll_top.mjs";
import {string_multiply} from "./string_multiply.mjs";
import {each_reverse} from "./each_reverse.mjs";
import {round} from "./round.mjs";
import {number_string_to} from "./number_string_to.mjs";
import {divide} from "./divide.mjs";
import {square} from "./square.mjs";
import {multiply} from "./multiply.mjs";
import {subtract_1} from "./subtract_1.mjs";
import {add_1} from "./add_1.mjs";
import {list_add_multiple} from "./list_add_multiple.mjs";
import {html_disable} from "./html_disable.mjs";
import {html_button_width_full_text_click} from "./html_button_width_full_text_click.mjs";
import {equal} from "./equal.mjs";
import {html_clear} from "./html_clear.mjs";
import {list_get} from "./list_get.mjs";
import {object_property_get} from "./object_property_get.mjs";
import {html_document_body} from "./html_document_body.mjs";
import {list_length} from "./list_length.mjs";
import {list_index_last} from "./list_index_last.mjs";
import {html_style} from "./html_style.mjs";
import {list_add} from "./list_add.mjs";
import {html_hr} from "./html_hr.mjs";
import {string_combine} from "./string_combine.mjs";
import {html_p_text} from "./html_p_text.mjs";
import {list_index} from "./list_index.mjs";
import {list_take} from "./list_take.mjs";
import {list_sum} from "./list_sum.mjs";
import {each_index} from "./each_index.mjs";
import {add} from "./add.mjs";
import {html_spacer_vertical} from "./html_spacer_vertical.mjs";
import {html_span_text} from "./html_span_text.mjs";
import {html_style_bold} from "./html_style_bold.mjs";
import {range} from "./range.mjs";
import {string_length} from "./string_length.mjs";
import {html_span} from "./html_span.mjs";
export function app_learn_code() {
    let modules = app_learn_code_modules();
    let root = html_document_body();
    html_hash({
        'background_color': value => {
            html_style(root, {
                'background-color': value
            });
        }
    });
    html_style_default_initialize();
    let default_font_size = html_style_default_font_size_value();
    let lesson_screens = [];
    let lessons = [];
    for (let module of modules) {
        let {lessons:module_lessons} = module
        for (let lesson_create of module_lessons) {
            let lesson = lesson_create();
            list_add(lessons, lesson);
            let s = object_property_get(lesson, 'screens');
            list_add_multiple(lesson_screens, s);
        }
    }
    function refresh_settings() {
        clear_scroll();
        button_home_hr();
        let base = 16;
        let max_rgb = square(base) - 1;
        let max = 20;
        let index = 0;
        each_reverse(range(max), i => {
            index++;
            let percent = divide(i, subtract_1(max));
            let product = multiply(percent, max_rgb);
            let rounded = round(product);
            let rgb_part = number_string_to(rounded, base);
            if (equal(string_length(rgb_part), 1)) {
                rgb_part = string_combine('0', rgb_part);
            }
            let parts = 3;
            let rgb = string_multiply(rgb_part, parts);
            let color = string_combine('#', rgb);
            let font_color;
            if (percent > 0.5) {
                font_color = 'black';
            } else {
                font_color = 'white';
            }
            let change = html_button_width_full_text_click(root, string_combine_multiple([index, '.', ' background color : ', color]), () => html_style(root, {
                'color': font_color,
                'background-color': color
            }));
            html_style(change, {
                'color': font_color,
                'background-color': color
            });
        });
    }
    function refresh_main() {
        clear_scroll();
        html_button_width_full_text_click(root, '⚙️ settings', refresh_settings);
        html_p_text(root, 'if you want to start from the beginning , choose "begin" : ');
        let begin = html_button_width_full_text_click(root, '🚀 begin', async () => await refresh_lesson_screen(0));
        html_style(begin, {
            'font-size': string_combine(multiply(default_font_size, 1.2).toString(), 'vh')
        });
        html_style_bold(begin);
        html_p_text(root, 'or choose a lesson below :');
        for (let lesson of lessons) {
            let {description} = lesson;
            let b = html_button_width_full_text_click(root, '', () => refresh_lesson(lesson));
            let split = html_style_alternate_split(description);
            html_style_alternate(b, html_span, [noop, app_learn_code_style_code_colored], split);
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
