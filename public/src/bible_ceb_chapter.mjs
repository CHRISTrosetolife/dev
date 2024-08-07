import { list_size } from "./list_size.mjs";
import { assert_message } from "./assert_message.mjs";
import { bible_cebulb_chapter } from "./bible_cebulb_chapter.mjs";
import { each } from "./each.mjs";
import { each_object } from "./each_object.mjs";
import { object_property_get_curry } from "./object_property_get_curry.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { log } from "./log.mjs";
import { bible_engbsb_chapter } from "./bible_engbsb_chapter.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { string_replace_multiple } from "./string_replace_multiple.mjs";
import { ceb_definition } from "./ceb_definition.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { equal_by } from "./equal_by.mjs";
import { assert } from "./assert.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_string } from "./list_sort_string.mjs";
export async function bible_ceb_chapter(chapter_name) {
  if (0) {
    log({
      chapter_name,
    });
  }
  let eng = await bible_engbsb_chapter(chapter_name);
  let missing = {
    MAT17: ["21"],
    MAT18: ["11"],
    MRK07: ["16"],
    MRK09: ["44", "46"],
    MRK11: ["26"],
    MRK15: ["28"],
    LUK17: ["36"],
    LUK23: ["17"],
    JHN05: ["4"],
    ACT08: ["37"],
    ACT15: ["34"],
    ACT24: ["7"],
    ACT28: ["29"],
    ROM16: ["24"],
    "3JN01": ["15"],
    REV12: ["18"],
  };
  let missing_is = false;
  each_object(missing, (chapter_name_missing, verse_numbers) => {
    if (chapter_name === chapter_name_missing) {
      each(verse_numbers, (vn) => {
        list_add(eng, {
          verse_number: vn,
          tokens: [],
        });
      });
      missing_is = true;
    }
  });
  if (missing_is) {
    list_sort_string(eng, object_property_get_curry("verse_number"));
  }
  let eng_verse_numbers = list_map_property(eng, "verse_number");
  let ceb = await bible_cebulb_chapter(chapter_name);
  let ceb_verse_numbers = list_map_property(ceb, "verse_number");
  let ceb_verse_numbers_difference = list_difference(
    ceb_verse_numbers,
    eng_verse_numbers,
  );
  let eng_verse_numbers_difference = list_difference(
    eng_verse_numbers,
    ceb_verse_numbers,
  );
  assert_message(list_empty_is, [ceb_verse_numbers_difference], () => {
    return {
      eng_verse_numbers_difference,
      ceb_verse_numbers_difference,
      ceb_verse_numbers,
      eng_verse_numbers,
      chapter_name,
    };
  });
  assert(equal_by, [eng, ceb, list_size]);
  let symbols = [",", "1", "2", ".", ";", "“", "”", ":"];
  let words_unique = list_adder_unique((la) => {
    for (let m of ceb) {
      let { tokens } = m;
      for (let token of tokens) {
        let mapped3 = string_case_lower(token);
        let mapped4 = string_replace_multiple(mapped3, symbols, "");
        if (mapped4.length >= 1) {
          la(mapped4);
        }
      }
    }
  });
  let definitions = {};
  if (0) {
    for (let w of words_unique) {
      let d = await ceb_definition(w);
      object_property_set(definitions, w, d);
    }
  }
  let data = {
    ceb,
    eng,
    definitions,
  };
  return data;
}
