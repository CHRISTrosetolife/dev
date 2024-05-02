import {list_last} from "./list_last.mjs";
import {app_memorize_group} from "./app_memorize_group.mjs";
import {undefined_not_is} from "./undefined_not_is.mjs";
import {html_style_font_color} from "./html_style_font_color.mjs";
import {html_scroll_center} from "./html_scroll_center.mjs";
import {list_adder} from "./list_adder.mjs";
import {greater_than_equal} from "./greater_than_equal.mjs";
import {string_case_lower} from "./string_case_lower.mjs";
import {string_letter_first} from "./string_letter_first.mjs";
import {html_style_button_default_initialize} from "./html_style_button_default_initialize.mjs";
import {multiply} from "./multiply.mjs";
import {list_length} from "./list_length.mjs";
import {string_case_upper} from "./string_case_upper.mjs";
import {html_style_centered} from "./html_style_centered.mjs";
import {html_button} from "./html_button.mjs";
import {html_div} from "./html_div.mjs";
import {subtract} from "./subtract.mjs";
import {string_to} from "./string_to.mjs";
import {html_style_background_color} from "./html_style_background_color.mjs";
import {equal} from "./equal.mjs";
import {and} from "./and.mjs";
import {html_style_default_font_size} from "./html_style_default_font_size.mjs";
import {bible_engbsb_storage_path_file} from "./bible_engbsb_storage_path_file.mjs";
import {storage_url} from "./storage_url.mjs";
import {http_get} from "./http_get.mjs";
import {html_document_body} from "./html_document_body.mjs";
import {html_element} from "./html_element.mjs";
import {html_inner_set} from "./html_inner_set.mjs";
import {html_span} from "./html_span.mjs";
import {html_span_text} from "./html_span_text.mjs";
import {html_strong_text} from "./html_strong_text.mjs";
import {html_style_sans_serif} from "./html_style_sans_serif.mjs";
import {each_index} from "./each_index.mjs";
import {html_style} from "./html_style.mjs";
import {string_combine} from "./string_combine.mjs";
import {string_split} from "./string_split.mjs";
import {html_button_width_full_text_click} from "./html_button_width_full_text_click.mjs";
import {noop} from "./noop.mjs";
import {add} from "./add.mjs";
import {html_on_click} from "./html_on_click.mjs";
import {list_get} from "./list_get.mjs";
import {html_clear} from "./html_clear.mjs";
import {undefined_is} from "./undefined_is.mjs";
import {list_first} from "./list_first.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function app_memorize() {
    let root = html_document_body();
    html_style(root, {
        margin: '0'
    });
    html_style_sans_serif(root);
    html_style_default_font_size(3);
    html_style_button_default_initialize();
    let file_path = bible_engbsb_storage_path_file('JHN19');
    let verses = await http_get(storage_url(file_path));
    let verses_length = list_length(verses);
    let groups = app_memorize_group(verses_length);
    let group_first = list_first(groups);
    let group_current;
    let verse_index;
    let token_index;
    group_current = group_first;
    verse_index = 0;
    token_index = 0;
    refresh_memorize();
    function refresh_settings() {
        html_clear(root);
        html_button_width_full_text_click(root, 'back', () => {
            refresh_memorize();
        });
        html_button_width_full_text_click(root,group_to_range_string(group_current), () => {
            html_clear(root);
            for (let g of groups) {
                html_button_width_full_text_click(root,group_to_range_string(g), () => {
                    group_current = g;
                    refresh_settings()
                });
            }
        });
    }
    function group_to_range_string(g) {
        let first_verse_index = list_first(g);
        let first_verse = list_get(verses, first_verse_index);
        let { verse_number: first_verse_number } = first_verse;
        let first_number = first_verse_number;
        let last_verse_index = list_last(g);
        let last_verse = list_get(verses, last_verse_index);
        let { verse_number: last_verse_number } = last_verse;
        let last_number = last_verse_number;
        return string_combine_multiple(['verses ',first_number,' - ',last_number])
    }

    function refresh_memorize() {
        html_clear(root);
        let settings_element = html_element(root, 'div');
        let settings_button = html_button_width_full_text_click(settings_element, '⚙️ settings', refresh_settings);
        html_style(settings_button, {
            'margin-left': 0,
            'margin-right': 0
        });
        let verses_element = html_element(root, 'div');
        let button_height = 7;
        let keys = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
        let keys_length = list_length(keys);
        let keyboard_height = multiply(button_height, keys_length);
        let offset = add(keyboard_height, 7);
        let height_max = subtract(100, offset);
        html_style(verses_element, {
            'max-height': number_to_dvh(height_max),
            'min-height': number_to_dvh(height_max),
            'overflow-y': 'scroll'
        });
        let verse_elements = list_adder(la => {
            for (let i of group_current) {
                let verse = list_get(verses, i);
                let verse_element = html_element(verses_element, 'div');
                let {tokens, verse_number} = verse;
                let number_element = html_strong_text(verse_element, verse_number);
                html_on_click(number_element, () => {
                    token_index = 0;
                    verse_index = i;
                    html_scroll_center(verse_element);
                });
                let token_elements = list_adder(la => {
                    each_index(tokens, (token, j) => {
                        html_span_text(verse_element, ' ');
                        let token_element = html_span_text(verse_element, token);
                        la(token_element);
                    });
                });
                la({
                    verse_element,
                    token_elements
                });
            }
        });
        let previous_token;
        update_colors();
        function update_colors() {
            let current_verse = list_get(verse_elements, verse_index);
            let {verse_element, token_elements} = current_verse;
            let current_token = list_get(token_elements, token_index);
            html_scroll_center(verse_element);
            html_style_background_color(current_token, 'green');
            html_style_font_color(current_token, 'white');
            if (undefined_not_is(previous_token)) {
                html_style_background_color(previous_token, 'inherit');
                html_style_font_color(previous_token, 'inherit');
            }
            previous_token = current_token;
        }
        let keyboard_element = html_element(root, 'div');
        html_style(keyboard_element, {
            'max-height': number_to_dvh(keyboard_height)
        });
        for (let row of keys) {
            let row_element = html_div(keyboard_element);
            html_style_centered(row_element);
            for (let k of row) {
                let b = html_button(row_element);
                html_style_centered(b);
                html_inner_set(b, string_case_upper(k));
                let b_width = number_to_dvw(10 - 1);
                html_style(b, {
                    'font-size': '3.8dvh',
                    margin: '0.25dvh',
                    'min-width': b_width,
                    'max-width': b_width,
                    'height': number_to_dvh(button_height - 0.6)
                });
                html_on_click(b, () => {
                    let current_verse = list_get(verses, verse_index);
                    let {tokens} = current_verse;
                    let current_token = list_get(tokens, token_index);
                    let letter_first = string_case_lower(string_letter_first(current_token));
                    if (equal(k, letter_first)) {
                        token_index++;
                        let tokens_length = list_length(tokens);
                        if (greater_than_equal(token_index, tokens_length)) {
                            verse_index++;
                            token_index = 0;
                        }
                        update_colors();
                    }
                });
            }
        }
        return {
            verse_elements
        };
    }
    function number_to_dvh(value) {
        return string_combine(string_to(value), 'dvh');
    }
    function number_to_dvw(value) {
        return string_combine(string_to(value), 'dvw');
    }
}
