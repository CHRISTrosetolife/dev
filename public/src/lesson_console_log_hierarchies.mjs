import {html_style_bold} from "./html_style_bold.mjs";
import {noop} from "./noop.mjs";
import {html_p} from "./html_p.mjs";
import {html_style_alternate} from "./html_style_alternate.mjs";
import {html_p_text} from "./html_p_text.mjs";
import { html_element } from "./html_element.mjs";
import { html_style_width_full } from "./html_style_width_full.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
import { string_split } from "./string_split.mjs";
import { string_split_space } from "./string_split_space.mjs";
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
    let t = html_element(parent, 'table');
    html_style_width_full(t);
    let tr1 = html_element(t, 'tr');
    let tr2 = html_element(t, 'tr');
    let tr3 = html_element(t, 'tr');
    let td_phrase = html_element(tr1, 'td');
    let phrase = 'JESUS is LORD';
    html_inner_set(td_phrase, phrase)
    let words = string_split_space(phrase)
    for (let word of words) {
        let td_word = html_element(tr2, 'td');
        html_inner_set(td_word, word)
    }
    for (let word of words) {
        for (let c of word) {
            let td_letter = html_element(tr3, 'td');
            html_inner_set(td_letter, c)
        }
    }

}
