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
import { equal } from "./equal.mjs";
export function app_code_edit_recursive(node, parent) {
    let {type} = node;
    if (equal(type, 'Program')) {
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
    } else if (equal(type, 'ImportDeclaration')) {
        html_style_word_break_all(parent);
        let {specifiers} = node;
        let specifier = list_single(specifiers);
        let {local,imported} = specifier;
        for (let a of [local,imported]) {
            let {type} = a;
            assert(equal, [type, 'Identifier'])
        }
        let {name:local_name} = local;
        let {name:imported_name} = imported;
        html_inner_set(parent, json_to(specifiers));
    } else {
        html_inner_set(parent, json_to(node));
    }
}
