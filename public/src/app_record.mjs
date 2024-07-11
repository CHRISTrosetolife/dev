import { html_button_text_click } from "./html_button_text_click.mjs";
import { each } from "./each.mjs";
import { app_record_book } from "./app_record_book.mjs";
import { app_record_chapter } from "./app_record_chapter.mjs";
import { app_record_verse } from "./app_record_verse.mjs";
import { object_property_get_or } from "./object_property_get_or.mjs";
import { html_hash_lookup } from "./html_hash_lookup.mjs";
import { bible_engbsb_storage_http_get } from "./bible_engbsb_storage_http_get.mjs";
import { object_merge } from "./object_merge.mjs";
import { html_recorder_media } from "./html_recorder_media.mjs";
import { firebase_auth } from "./firebase_auth.mjs";
import { app_record_login } from "./app_record_login.mjs";
import { firebase_initialize } from "./firebase_initialize.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { html_script_axios } from "./html_script_axios.mjs";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
export async function app_record() {
  let root = html_style_default_initialize();
  await html_script_axios(root);
  firebase_initialize();
  let auth = firebase_auth();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      let context = {};
      context.mr = await html_recorder_media();
      object_merge(context, {
        root,
      });
      let { root } = context;
      let { books } = await bible_engbsb_storage_http_get("books");
      object_merge(context, {
        books,
      });
      let lookup = html_hash_lookup();
      let hash_book = object_property_get_or(lookup, "book", null);
      if (hash_book !== null) {
        let hash_chapter = object_property_get_or(lookup, "chapter", null);
        if (hash_chapter !== null) {
          let hash_verse = object_property_get_or(lookup, "verse", null);
          if (hash_verse !== null) {
            await app_record_verse(
              context,
              hash_book,
              hash_chapter,
              hash_verse,
            );
          } else {
            await app_record_chapter(context, hash_book, hash_chapter);
          }
        } else {
          app_record_book(context, hash_book);
        }
      } else {
        html_clear_scroll_top(root);
        each(books, (book) => {
          let { book_code } = book;
          html_button_text_click(root, book_code, function () {
            app_record_book(context, book_code);
          });
        });
      }
    } else {
      app_record_login(root);
    }
  });
}
