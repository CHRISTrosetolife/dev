import { ceb_translations } from "./ceb_translations.mjs";
import { object_properties } from "./object_properties.mjs";

export function ceb_learn() {
    let root = document.body;
    let button = html_element(root, 'button');
    let translations = ceb_translations();
    let keys = object_properties(translations);
}