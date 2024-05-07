import {json_to} from "./json_to.mjs";
import {html_inner_set} from "./html_inner_set.mjs";
import {html_style_word_break_all} from "./html_style_word_break_all.mjs";
import {html_style} from "./html_style.mjs";
import {html_style_font_color} from "./html_style_font_color.mjs";
import {html_style_background_color} from "./html_style_background_color.mjs";
import {app_learn_code_style_rounded_padded} from "./app_learn_code_style_rounded_padded.mjs";
import {html_div} from "./html_div.mjs";
import { assert } from "./assert.mjs";
import { list_length_1 } from "./list_length_1.mjs";
import { list_single } from "./list_single.mjs";
export function app_code_edit_recursive(node, parent) {
    let {type} = node;
    switch (type) {
        case 'Program':
            let {body} = node;
            for (let b of body) {
                let child = html_div(parent);
                app_learn_code_style_rounded_padded(child);
                html_style_background_color(child, 'hsl(0, 0%, 20%)');
                html_style_font_color(child, 'white');
                html_style(child, {
                    'margin': '0.3dvh'
                });
                app_code_edit_recursive(b, child);
            }
            break;
        case 'ImportDeclaration':
            html_style_word_break_all(parent);
            let {specifiers} = node;
            let specifier = list_single(specifiers);
            let {local,imported} = specifier;
            html_inner_set(parent, json_to(specifiers));
            break;
        default:
            html_inner_set(parent, json_to(node));
    }
}
