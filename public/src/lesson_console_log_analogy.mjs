import {html_p_text} from "./html_p_text.mjs";
import {html_element} from "./html_element.mjs";
import { object_property_set } from "./object_property_set.mjs";
export function lesson_console_log_analogy(parent) {
    html_p_text(parent, 'suppose there is a sheet of paper');
    let i1 = html_element(parent, 'img')
    object_property_set(i1, 'src', img_path)
}
