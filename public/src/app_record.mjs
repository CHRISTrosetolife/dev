import { app_record_book } from "./app_record_book.mjs";
import { object_property_get_or } from "./object_property_get_or.mjs";
import { html_hash_lookup } from "./html_hash_lookup.mjs";
import { html_button_text_click } from "./html_button_text_click.mjs";
import { each } from "./each.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { html_script_axios } from "./html_script_axios.mjs";
import { bible_engbsb_storage_http_get } from "./bible_engbsb_storage_http_get.mjs";
import { object_merge } from "./object_merge.mjs";
export async function app_record() {
  let context = {};
  let root = html_style_default_initialize();
  object_merge(context, {
    root,
  });
  await html_script_axios(root);
  let { books } = await bible_engbsb_storage_http_get("books");
  object_merge(context, {
    books,
  });
  each(books, (book) => {
    let { book_code } = book;
    html_button_text_click(root, book_code, function () {
      app_record_book(context, book_code);
    });
  });
  let lookup = html_hash_lookup();
  let hash_book = object_property_get_or(lookup, "book", null);
  let hash_chapter = object_property_get_or(lookup, "chapter", null);
  app_record_book(context, hash_book);
}
