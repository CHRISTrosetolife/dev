import { ceb_translations } from "./ceb_translations.mjs";
import { list_map } from "./list_map.mjs";
import { object_properties } from "./object_properties.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { string_length } from "./string_length.mjs";
import { list_sort } from "./list_sort.mjs";

export function ceb_learn() {
    let root = document.body;
    let button = html_element(root, 'button');
    let translations = ceb_translations();
    let keys = object_properties(translations);
    let mapped = list_map(keys, key => {
        return {
            key,
            value: object_property_get(translations, key),
        }
    })
    list_sort(mapped, item => string_length(item.key));
    console.log({mapped})
}