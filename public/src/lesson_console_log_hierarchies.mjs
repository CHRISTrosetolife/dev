import {app_learn_code_style_success} from "./app_learn_code_style_success.mjs";
import {html_style_button_default_border} from "./html_style_button_default_border.mjs";
import {html_style_centered} from "./html_style_centered.mjs";
import {html_merge} from "./html_merge.mjs";
import {html_style_bold} from "./html_style_bold.mjs";
import {noop} from "./noop.mjs";
import {html_p} from "./html_p.mjs";
import {html_style_alternate} from "./html_style_alternate.mjs";
import {html_p_text} from "./html_p_text.mjs";
import {html_element} from "./html_element.mjs";
import {html_style_width_full} from "./html_style_width_full.mjs";
import {html_inner_set} from "./html_inner_set.mjs";
import {string_split} from "./string_split.mjs";
import {string_split_space} from "./string_split_space.mjs";
import {string_length} from "./string_length.mjs";
import {list_sum} from "./list_sum.mjs";
import {html_style} from "./html_style.mjs";
import { app_learn_code_style_rounded_padded } from "./app_learn_code_style_rounded_padded.mjs";
export async function lesson_console_log_hierarchies(parent) {
    html_p_text(parent, 'in english , there are letters');
    html_p_text(parent, 'words have letters');
    html_p_text(parent, 'phrases have words');
    html_p_text(parent, 'sentences have phrases');
    html_p_text(parent, 'paragraphs have sentences');
    html_p_text(parent, 'and so on');
    html_style_alternate(parent, html_p, [noop, html_style_bold], ['this is a ', 'hierarchy']);
    html_style_alternate(parent, html_p, [noop, html_style_bold], ['a hierarchy can also be called a ', 'tree']);
    html_p_text(parent, 'trees are very important in computer programming');
    html_p_text(parent, 'here is an example of a tree or hierarchy :');
    let phrase = 'JESUS is LORD';
    let words = string_split_space(phrase);
    let t = html_element(parent, 'table');
    html_style(t, { 
        'border-collapse': 'separate',
        'border-spacing': '-0.5vh',
})
    html_style_width_full(t);
    let tr1 = html_element(t, 'tr');
    let tr2 = html_element(t, 'tr');
    let tr3 = html_element(t, 'tr');
    let td_phrase = element_td(tr1, phrase);
    let colspan = list_sum(s => {
        for (let word of words) {
            let length = string_length(word);
            s(length);
        }
    });
    html_merge(td_phrase, {
        colspan
    });
    for (let word of words) {
        let td_word = element_td(tr2, word);
        let length = string_length(word);
        html_merge(td_word, {
            colspan: length
        });
    }
    for (let word of words) {
        for (let c of word) {
            element_td(tr3, c);
        }
    }
    function element_td(parent, text) {
        let td = html_element(parent, 'td');
        html_style_centered(td);
        html_inner_set(td, text);
        html_style(td, html_style_button_default_border());
        app_learn_code_style_rounded_padded(td);
        app_learn_code_style_success(td);
        html_style(td, {
            margin: '10vh'
        })
        return td;
    }
}
