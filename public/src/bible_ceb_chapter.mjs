import {file_read} from './file_read.mjs';
import {path_join} from './path_join.mjs';
import {string_combine} from './string_combine.mjs';
import {bible_chapter_parsed} from './bible_chapter_parsed.mjs';
import {string_split} from './string_split.mjs';
import {list_map} from './list_map.mjs';
import {string_trim} from './string_trim.mjs';
import {list_get} from './list_get.mjs';
import {string_case_lower} from './string_case_lower.mjs';
import {list_adder_unique} from './list_adder_unique.mjs';
import {string_replace_multiple} from './string_replace_multiple.mjs';
import {list_join} from './list_join.mjs';
import {equal} from './equal.mjs';
import {list_includes} from './list_includes.mjs';
import {list_filter} from './list_filter.mjs';
import {newline} from './newline.mjs';
import {file_write} from './file_write.mjs';
import {string_combine_multiple} from './string_combine_multiple.mjs';
import {ceb_definition} from './ceb_definition.mjs';
import {object_property_set} from './object_property_set.mjs';
import {equal_by} from './equal_by.mjs';
import {assert} from './assert.mjs';
import {list_length} from './list_length.mjs';
import { json_to } from './json_to.mjs';
import { function_new_generic } from './function_new_generic.mjs';
import { js_code_return } from './js_code_return.mjs';
export async function bible_ceb_chapter(chapter_name) {
    let parsed_bsb = await bible_chapter_parsed(
        'engbsb_html', chapter_name);
    let verses_bsb = parsed_bsb.querySelectorAll('.m');
    let mapped6 = list_map(verses_bsb, v => v.rawText);
    let joined = list_join(mapped6, '');
    let eng = bible_verses_parse(joined);
    let parsed_ceb = await bible_chapter_parsed(
        'cebulb_html', chapter_name);
    let verses_ceb = parsed_ceb.querySelector('.p');
    let rawText = verses_ceb.rawText;
    let ceb = bible_verses_parse(rawText);
    assert(equal_by, [eng, ceb, list_length])
    let symbols = [',', '1', '2', '.', ';', '“', '”', ':'];
    let words_unique = list_adder_unique(la => {
        for (let m of ceb) {
            let {tokens} = m;
            for (let token of tokens) {
                let mapped3 = string_case_lower(token);
                let mapped4 = string_replace_multiple(mapped3, symbols, '');
                if (mapped4.length >= 1) {
                    la(mapped4);
                }
            }
        }
    });
    let definitions = {};
    for (let w of words_unique) {
        let d = await ceb_definition(w);
        object_property_set(definitions, w, d);
    }
    let data = {ceb,eng,definitions};
    let body_string = js_code_return(json_to(data));
    const fn_name = `bible_data_${string_case_lower(chapter_name)}`;
    await function_new_generic(fn_name, ``, body_string, false, []);
    return fn_name;
}

function bible_verses_parse(rawText) {
    let split = string_split(rawText, '  ');
    let mapped = list_map(split, string_trim);
    let mapped2 = list_map(mapped, m => {
        let split = string_split(m, '&#160;');
        let verse_number = list_get(split, 0);
        let text = list_get(split, 1);
        let tokens = text.split(' ');
        return {
            verse_number,
            tokens
        };
    });
    return mapped2;
}
