import {html_style} from "./html_style.mjs";
import {html_p_text} from "./html_p_text.mjs";
import {html_element} from "./html_element.mjs";
import {object_property_set} from "./object_property_set.mjs";
import {string_combine} from "./string_combine.mjs";
export function lesson_console_log_analogy(parent) {
    html_p_text(parent, 'suppose there is a sheet of paper');
    let i1 = html_element(parent, 'img');
    let img_name = 'paper.jpg';
    let img_path = string_combine('./img/', img_name);
    let {element} = i1;
    object_property_set(element, 'src', img_path);
    html_style(i1, {
        'width': '100%'
    });
}
