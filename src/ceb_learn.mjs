import { ceb_translations } from "./ceb_translations.mjs";
import { list_map } from "./list_map.mjs";
import { object_properties } from "./object_properties.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { string_length } from "./string_length.mjs";
import { list_sort } from "./list_sort.mjs";
import { html_element } from "./html_element.mjs";
import { list_get } from "./list_get.mjs";
import { html_inner_set } from "./html_inner_set.mjs";

export function ceb_learn() {
    let root = document.body;
    let button1 = html_element(root, 'button');
    let button2 = html_element(root, 'button');
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
    let item = list_get(mapped, index)
    html_inner_set(button1, item.key);
    html_inner_set(button2, item.value);
}