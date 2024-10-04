import { bible_books_chapters } from "./bible_books_chapters.mjs";
import { prayer_log } from "./prayer_log.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { each } from "./each.mjs";
import { countries } from "./countries.mjs";
export async function prayer_auto() {
  await bible_books_chapters();
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
