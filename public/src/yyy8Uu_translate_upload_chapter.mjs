import { assert } from "./assert.mjs";
import { integer_parse } from "./integer_parse.mjs";
import { error } from "./error.mjs";
import { log } from "./log.mjs";
import { equal_not } from "./equal_not.mjs";
import { storage_upload_object } from "./storage_upload_object.mjs";
import { yyy8Uu_storage_path } from "./yyy8Uu_storage_path.mjs";
import { list_single } from "./list_single.mjs";
import { yyy8Uu_part } from "./yyy8Uu_part.mjs";
import { yyy8Uu_language_to } from "./yyy8Uu_language_to.mjs";
import { yyy8Uu_language_from } from "./yyy8Uu_language_from.mjs";
import { gcloud_translate_cache } from "./gcloud_translate_cache.mjs";
import { each_range_async } from "./each_range_async.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { yyy8Uu_parts_english_count } from "./yyy8Uu_parts_english_count.mjs";
import { list_length } from "./list_length.mjs";
import { yyy8Uu_parts } from "./yyy8Uu_parts.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
export async function yyy8Uu_translate_upload_chapter(chapter_index) {
  chapter_index = integer_parse(chapter_index);
  log({
    chapter_index,
  });
  let latin = await yyy8Uu_parts(chapter_index);
  let latin_length = list_length(latin);
  let english_length = await yyy8Uu_parts_english_count(chapter_index);
  let english = await list_adder_async(async (la) => {
    await each_range_async(english_length, async (index2) => {
      let translateds = await gcloud_translate_cache(
        yyy8Uu_language_from(),
        yyy8Uu_language_to(),
        yyy8Uu_part.name,
        [chapter_index, index2],
      );
      let translated = list_single(translateds);
      la(translated);
    });
  });
  assert(greater_than_equal, [english_length, latin_length]);
  let less = english_length - latin_length;
  assert(less_than_equal, [less, 2]);
  return;
  let destination = yyy8Uu_storage_path(chapter_index);
  if (10) {
    await storage_upload_object(
      {
        english,
        latin,
      },
      destination,
    );
  }
  if (10) {
    if (equal_not(latin_length, english_length)) {
      let less = english_length - 2;
      if (equal_not(latin_length, less)) {
        log({
          index: chapter_index,
          l: latin_length,
          e: english_length,
        });
        error();
      }
    }
  }
}
