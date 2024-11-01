import { list_add } from "./list_add.mjs";
import { html_span } from "./html_span.mjs";
import { html_button_copy_get } from "./html_button_copy_get.mjs";
import { html_p } from "./html_p.mjs";
import { app_share_verse_download } from "./app_share_verse_download.mjs";
import { emoji_add } from "./emoji_add.mjs";
import { list_add_beginning } from "./list_add_beginning.mjs";
import { bible_reference_code } from "./bible_reference_code.mjs";
import { string_split_plus } from "./string_split_plus.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { html_style_link } from "./html_style_link.mjs";
import { html_hash_unparse } from "./html_hash_unparse.mjs";
import { bible_chapter_name_parse } from "./bible_chapter_name_parse.mjs";
import { noop } from "./noop.mjs";
import { app_gs_bible_chapter_name } from "./app_gs_bible_chapter_name.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { app_share_bible_folders } from "./app_share_bible_folders.mjs";
import { app_share_verse } from "./app_share_verse.mjs";
import { app_share_chapter } from "./app_share_chapter.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_bible_verse_navigation_next } from "./html_bible_verse_navigation_next.mjs";
import { firebase_initialize_axios } from "./firebase_initialize_axios.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_hash_lookup } from "./html_hash_lookup.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { list_concat } from "./list_concat.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
export async function app_share() {
  let root = await firebase_initialize_axios();
  let context = {
    root,
  };
  let lookup = html_hash_lookup();
  let chapter_next;
  let book_code_next;
  let chapter_code_next;
  let verse_number_next;
  let verse_numbers = [];
  chapter_next = object_property_get(lookup, app_share_chapter());
  verse_number_next = object_property_get(lookup, app_share_verse());
  let bible_folders_text = object_property_get(
    lookup,
    app_share_bible_folders(),
  );
  let bible_folders = string_split_plus(bible_folders_text);
  let texts = [];
  let reference = bible_reference_code(chapter, verse_number_next);
  list_add_beginning(texts, reference);
  let verses_component = html_p(root);
  let lookup_next;
  let next_text = "Next verse: ";
  html_span_text(root, next_text);
  let next_url_component = html_span(root);
  let location = object_property_get(window, "location");
  let pathname = object_property_get(location, "pathname");
  let origin = object_property_get(location, "origin");
  let without_hash = string_combine_multiple([origin, pathname]);
  let url_next;
  await download();
  html_button_width_full_text_click(
    root,
    string_combine_multiple([emoji_add(), " add verse"]),
    download,
  );
  html_button_copy_get(root, () =>
    list_join_newline(
      list_concat([
        texts,
        ["", string_combine_multiple([next_text, url_next])],
      ]),
    ),
  );
  async function download() {
    list_add(verse_numbers, verse_number);
    await app_share_verse_download(
      bible_folders,
      chapter,
      verse_number,
      texts,
      verses_component,
    );
    let p = bible_chapter_name_parse(chapter);
    let book_code = object_property_get(p, "book_code");
    let chapter_code = object_property_get(p, "chapter_code");
    let next = await new Promise(async (resolve) => {
      await html_bible_verse_navigation_next(
        app_share,
        book_code,
        chapter_code,
        verse_number,
        (book_code, chapter, verse_number_next) =>
          resolve({
            book_code,
            chapter,
            verse_number_next,
          }),
        context,
        noop,
      );
    });
    book_code_next = object_property_get(next, "book_code");
    chapter_code_next = object_property_get(next, "chapter");
    chapter_next = app_gs_bible_chapter_name(book_code_next, chapter_code_next);
    verse_number_next = object_property_get(next, "verse_number_next");
    lookup_next = {};
    object_property_set(
      lookup_next,
      app_share_bible_folders(),
      bible_folders_text,
    );
    object_property_set(lookup_next, app_share_chapter(), chapter_next);
    object_property_set(lookup_next, app_share_verse(), verse_number_next);
    let joined = html_hash_unparse(lookup_next);
    url_next = string_combine_multiple([without_hash, "#", joined]);
    html_inner_set(next_url_component, url_next);
    html_style_link(url_next)(next_url_component);
  }
}
