import { list_join_space } from "./list_join_space.mjs";
import { list_map } from "./list_map.mjs";
import { list_denest } from "./list_denest.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { bible_books_chapter_each } from "./bible_books_chapter_each.mjs";
import { log } from "./log.mjs";
import { prayer_log } from "./prayer_log.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { each } from "./each.mjs";
import { countries } from "./countries.mjs";
export async function prayer_auto() {
  let bible_folder = "engbsb";
  let chapters = await list_adder_async(async (la) => {
    await bible_books_chapter_each(bible_folder, async (chapter_code) => {
      let verses = await bible_chapter(bible_folder, chapter_code);
      la(verses);
    });
  });
  let verses = list_denest(chapters);
  let verse_texts = list_map(verses, (v) =>
    list_join_space(object_property_get(object, "property_name")),
  );
  log(verses);
  return;
  let cs = countries();
  each(cs, (c) => {
    let requests = ["bless", "save each person in"];
    each(requests, (request) => {
      let prayer_body = string_combine_multiple([
        request,
        " the country of ",
        object_property_get(c, "name"),
      ]);
      prayer_log(prayer_body);
    });
  });
}
