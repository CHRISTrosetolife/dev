import { assert_message } from "./assert_message.mjs";
import { html_parse_visit_class_list } from "./html_parse_visit_class_list.mjs";
import { list_join_dash } from "./list_join_dash.mjs";
import { add_1 } from "./add_1.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_add } from "./list_add.mjs";
import { list_remove_last } from "./list_remove_last.mjs";
import { string_split_dash } from "./string_split_dash.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
import { bible_chapters } from "./bible_chapters.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { list_size_equal } from "./list_size_equal.mjs";
import { assert } from "./assert.mjs";
import { list_get } from "./list_get.mjs";
import { log } from "./log.mjs";
import { each_index } from "./each_index.mjs";
import { html_parse_a_href_surrounded_hrefs } from "./html_parse_a_href_surrounded_hrefs.mjs";
import { http_cache_parse_parsed } from "./http_cache_parse_parsed.mjs";
export async function catholicgallery() {
  let u =
    "https://bible.catholicgallery.org/world-english-bible-with-deuterocanon/";
  let { root } = await http_cache_parse_parsed(u);
  let suffix = "1/";
  let hrefs = await html_parse_a_href_surrounded_hrefs(
    root,
    "https://bible.catholicgallery.org/english/",
    suffix,
  );
  ("greek daniel moved to end of old testament:");
  let books = [
    "GEN",
    "EXO",
    "LEV",
    "NUM",
    "DEU",
    "JOS",
    "JDG",
    "RUT",
    "1SA",
    "2SA",
    "1KI",
    "2KI",
    "1CH",
    "2CH",
    "EZR",
    "NEH",
    "EST",
    "JOB",
    "PSA",
    "PRO",
    "ECC",
    "SNG",
    "ISA",
    "JER",
    "LAM",
    "EZK",
    "DAN",
    "HOS",
    "JOL",
    "AMO",
    "OBA",
    "JON",
    "MIC",
    "NAM",
    "HAB",
    "ZEP",
    "HAG",
    "ZEC",
    "MAL",
    "TOB",
    "JDT",
    "ESG",
    "WIS",
    "SIR",
    "BAR",
    "1MA",
    "2MA",
    "1ES",
    "MAN",
    "PS2",
    "3MA",
    "2ES",
    "4MA",
    "DAG",
    "MAT",
    "MRK",
    "LUK",
    "JHN",
    "ACT",
    "ROM",
    "1CO",
    "2CO",
    "GAL",
    "EPH",
    "PHP",
    "COL",
    "1TH",
    "2TH",
    "1TI",
    "2TI",
    "TIT",
    "PHM",
    "HEB",
    "JAS",
    "1PE",
    "2PE",
    "1JN",
    "2JN",
    "3JN",
    "JUD",
    "REV",
  ];
  each_index(books, function (book, book_index) {
    log({
      book,
      h: list_get(hrefs, book_index),
    });
  });
  assert(list_size_equal, [books, hrefs]);
  await each_index_async(hrefs, async function (href, index) {
    let book_code = list_get(books, index);
    let bible_folder = "engwebu";
    let chapters = await bible_chapters(bible_folder, book_code);
    await each_index_async(chapters, async function (chapter, index2) {
      let c = await bible_chapter(bible_folder, chapter);
      log({
        c,
      });
      let split = string_split_dash(href);
      let last = list_remove_last(split);
      list_add(
        split,
        last === "151/" ? last : string_combine_multiple([add_1(index2), "/"]),
      );
      let href_new = list_join_dash(split);
      let { root } = await http_cache_parse_parsed(href_new);
      let verses = html_parse_visit_class_list(root, "bibvtxt");
      assert_message(list_size_equal, [verses, c], function () {
        let v = {
          chapter,
        };
        return v;
      });
    });
  });
}
