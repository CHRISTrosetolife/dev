import {file_read} from './file_read.mjs';
import {path_join} from './path_join.mjs';
import {string_combine} from './string_combine.mjs';
import {html_parse} from './html_parse.mjs';
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
export async function bible_ceb_chapter(chapter_name) {
  let folder_gitignore = path_join(['.', 'gitignore']);
  let folder = path_join([folder_gitignore, 'cebulb_html']);
  let chapter_path = string_combine(chapter_name, '.htm');
  let joined = path_join([folder, chapter_path]);
  let read = await file_read(joined);
  let parsed = html_parse(read);
  let verses = parsed.querySelector('.p');
  let rawText = verses.rawText;
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
  let symbols = [',', '1', '2', '.', ';', '“', '”', ':'];
  let words_unique = list_adder_unique(la => {
    for (let m of mapped2) {
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
  return words_unique;
  return;
  let translations_path = path_join(['translations', 'ceb_en.txt']);
  let translations_read = await file_read(translations_path);
  let translations = string_split(translations_read, newline());
  let existing = list_adder_unique(la => {
    for (let translation of translations) {
      let split2 = string_split(translation, ' ');
      let first = list_get(split2, 0);
      la(first);
    }
  });
  let add = list_filter(words_unique, w => !list_includes(existing, w));
  let mapped5 = list_map(add, a => string_combine_multiple([newline(), a, ' ']));
  let translations_read_combined = string_combine(translations_read, list_join(mapped5, ''));
  if (!equal(translations_read, translations_read_combined)) {
    await file_write(translations_path, translations_read_combined);
  }
  return mapped5;
}
