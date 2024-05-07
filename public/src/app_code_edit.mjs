import {html_button} from "./html_button.mjs";
import {html_spellcheck_none} from "./html_spellcheck_none.mjs";
import {html_style_border_box} from "./html_style_border_box.mjs";
import {html_style_height_full} from "./html_style_height_full.mjs";
import {html_document_body_clear} from "./html_document_body_clear.mjs";
import {object_property_get} from "./object_property_get.mjs";
import {html_element} from "./html_element.mjs";
import {html_inner_set} from "./html_inner_set.mjs";
import {html_style_width_full} from "./html_style_width_full.mjs";
import {html_style} from "./html_style.mjs";
export function app_code_edit(context, file_path) {
    let root = html_document_body_clear();
    html_style(root, {
        'display': 'flex',
        'flex-direction': 'column'
    });
    html_button(root, 'menu', () => {});
    let {files} = context;
    let contents = object_property_get(files, file_path);
    let ta = html_element(root, 'textarea');
    html_style(ta, {
        'flex': '1'
    });
    html_spellcheck_none(ta);
    html_style(ta, {
        'display': 'block'
    });
    html_style_border_box(ta);
    html_inner_set(ta, contents);
    html_style_width_full(ta);
    html_style_height_full(ta);
}
