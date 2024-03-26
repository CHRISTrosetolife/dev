import { ceb_translations } from "./ceb_translations.mjs";
import { list_map } from "./list_map.mjs";
import { object_properties } from "./object_properties.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { string_length } from "./string_length.mjs";
import { list_sort } from "./list_sort.mjs";
import { html_element } from "./html_element.mjs";
import { list_get } from "./list_get.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
import { html_style } from "./html_style.mjs";
import { html_style_width_full } from "./html_style_width_full.mjs";
import { html_on_click } from "./html_on_click.mjs";

export function ceb_learn() {
    let root = document.body;
    let button_font_size = '5vh';
    let button1 = html_element(root, 'button');
    html_style(button1, { 'font-size': button_font_size });
    html_style(button1, { 'font-weight': 'bold' });
    html_style_width_full(button1);
    let button2 = html_element(root, 'button');
    html_style(button2, { 'font-size': button_font_size });
    html_style(button2, { 'font-weight': 'bold' });
    html_style_width_full(button2);
    let button_previous = html_element(root, 'button');
    html_style(button_previous, { 'font-size': button_font_size });
    html_style_width_full(button_previous);
    html_inner_set(button_previous, 'previous');
    let button_next = html_element(root, 'button');
    html_style(button_next, { 'font-size': button_font_size });
    html_style_width_full(button_next);
    html_inner_set(button_next, 'next');
    let translations = ceb_translations();
    let keys = object_properties(translations);
    let mapped = list_map(keys, key => {
        return {
            key,
            value: object_property_get(translations, key),
        }
    })
    list_sort(mapped, item => string_length(item.key));
    let index = 0;
    refresh();
    function refresh() {
        let item = list_get(mapped, index);
        html_inner_set(button1, item.key);
        html_inner_set(button2, item.value);
    }
    html_on_click(button_previous, () => {
        index--;
        refresh();
    })
    html_on_click(button_next, () => {
        index++;
        refresh();
    })
}


