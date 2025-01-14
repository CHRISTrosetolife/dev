import { app_share_verse_refresh } from "./app_share_verse_refresh.mjs";
import { html_hash_set } from "./html_hash_set.mjs";
import { html_hash_unparse } from "./html_hash_unparse.mjs";
import { app_share_bible_folders } from "./app_share_bible_folders.mjs";
import { app_share_verse } from "./app_share_verse.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_share_chapter } from "./app_share_chapter.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_take_bible_books_new } from "./list_take_bible_books_new.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { each } from "./each.mjs";
import { html_hash_lookup } from "./html_hash_lookup.mjs";
export function app_share_main(context) {
  let lookup = html_hash_lookup();
  let { root } = context;
  let folders = [
    {
      text: "English",
      code: "engbsb",
    },
    {
      text: "Urdu and English",
      code: "urdgvu+engbsb",
    },
  ];
  each(folders, (folder) => {
    html_button_width_full_text_click(
      root,
      object_property_get(folder, "text"),
      async () => {
        let books_new = list_take_bible_books_new(
          object_property_get(context, "books"),
        );
        let book = list_random_item(books_new);
        let book_code = object_property_get(book, "book_code");
        let chapter_code = "01";
        object_property_set(
          lookup,
          app_share_chapter(),
          string_combine_multiple([book_code, chapter_code]),
        );
        let verse_number_next = "1";
        object_property_set(lookup, app_share_verse(), verse_number_next);
        let f = object_property_get(folder, "code");
        object_property_set(lookup, app_share_bible_folders(), f);
        let joined = html_hash_unparse(lookup);
        let h = string_combine_multiple(["#", joined]);
        html_hash_set(h);
        await app_share_verse_refresh(
          context,
          book_code,
          chapter_code,
          verse_number_next,
        );
      },
    );
  });
}
