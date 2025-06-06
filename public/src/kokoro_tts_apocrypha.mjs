import { kokoro_tts } from "./kokoro_tts.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { path_join } from "./path_join.mjs";
import { folder_external_root } from "./folder_external_root.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
import { bible_chapters_each } from "./bible_chapters_each.mjs";
import { number_pad_2 } from "./number_pad_2.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { each_async } from "./each_async.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { kokoro_voices_male } from "./kokoro_voices_male.mjs";
import { bible_books_apocrypha } from "./bible_books_apocrypha.mjs";
export async function kokoro_tts_apocrypha(bible_folder) {
  let books = await bible_books_apocrypha(bible_folder);
  let voices = kokoro_voices_male();
  let units = await list_adder_async(async function (la) {
    await each_async(voices, async function (voice) {
      await each_index_async(books, async function (book, book_index) {
        let book_index_1 = book_index + 1;
        if (false) {
        }
        let book_index_padded = number_pad_2(book_index_1);
        await bible_chapters_each(
          bible_folder,
          book,
          async function (chapter_code) {
            let verses = await bible_chapter(bible_folder, chapter_code);
            let text = list_join_space(
              list_map(list_map_property(verses, "tokens"), list_join_space),
            );
            let path = folder_external_root(
              path_join([
                "bible",
                "english",
                bible_folder,
                "apocrypha",
                voice,
                string_combine_multiple([book_index_padded, "_", chapter_code]),
              ]),
            );
            la({
              path,
              voice,
              text,
            });
          },
        );
      });
    });
  });
  await kokoro_tts(units);
}
