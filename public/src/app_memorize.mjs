import {string_to} from "./string_to.mjs";
import {html_style_background_color} from "./html_style_background_color.mjs";
import {equal} from "./equal.mjs";
import {and} from "./and.mjs";
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
import {each_index} from "./each_index.mjs";
import {html_style} from "./html_style.mjs";
import {string_combine} from "./string_combine.mjs";
export async function app_memorize() {
    let root = html_document_body();
    html_style_sans_serif(root);
    html_style_default_font_size(3);
    let file_path = bible_engbsb_storage_path_file('JHN19');
    let verses = await http_get(storage_url(file_path));
    let verse_index = 0;
    let token_index = 0;
    let verses_element = html_element(root, 'div');
    let height_max = 70;
    html_style(verses_element, {
        'max-height': string_combine(string_to(height_max), 'dvh'),
        'overflow': 'scroll'
    });
    each_index(verses, (verse, i) => {
        let section = html_element(verses_element, 'div');
        let {tokens, verse_number} = verse;
        html_strong_text(section, verse_number);
        each_index(tokens, (token, j) => {
            html_span_text(section, ' ');
            let token_element = html_span_text(section, token);
            if (and(equal(i, verse_index), equal(j, token_index))) {
                html_style_background_color(token_element, 'green');
                html_style(token_element, {
                    color: 'white'
                });
            }
        });
    });
    let keyboard_element = html_element(root, 'div');
    html_style(keyboard_element, {
        'max-height': 'dvh',
        'overflow': 'scroll'
    });
}
