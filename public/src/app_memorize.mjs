import {html_style_default_font_size} from "./html_style_default_font_size.mjs";
import {bible_engbsb_storage_path_file} from "./bible_engbsb_storage_path_file.mjs";
import {storage_url} from "./storage_url.mjs";
import {http_get} from "./http_get.mjs";
import {html_document_body} from "./html_document_body.mjs";
import {html_element} from "./html_element.mjs";
import {html_inner_set} from "./html_inner_set.mjs";
import {html_span} from "./html_span.mjs";
import {html_span_text} from "./html_span_text.mjs";
import {html_strong_text} from "./html_strong_text.mjs";
import {html_style_sans_serif} from "./html_style_sans_serif.mjs";
import { each_index } from "./each_index.mjs";
export async function app_memorize() {
    let root = html_document_body();
    html_style_sans_serif(root);
    html_style_default_font_size(3);
    let file_path = bible_engbsb_storage_path_file('JHN19');
    let verses = await http_get(storage_url(file_path));
    let verse_index = 0;
    let word_index = 0;
    each_index(verses, (verse, i) => {
        for (let verse of verses) {
            let section = html_element(root, 'section');
            let {tokens, verse_number} = verse;
            html_strong_text(section, verse_number);
            for (let token of tokens) {
                html_span_text(section, ' ');
                let token_element = html_span_text(section, token);
                and(equal(), verse);
            }
        }
    })
}
function and(token, verse) {
    return token && verse;
}

