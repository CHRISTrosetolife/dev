import { list_join_dash } from "./list_join_dash.mjs";
import { list_remove_last } from "./list_remove_last.mjs";
import { string_split_dash } from "./string_split_dash.mjs";
import { each_index } from "./each_index.mjs";
import { log } from "./log.mjs";
import { add_1 } from "./add_1.mjs";
import { bible_chapters } from "./bible_chapters.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_get } from "./list_get.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { assert } from "./assert.mjs";
import { http_cache } from "./http_cache.mjs";
import { html_parse_a_href_surrounded_hrefs } from "./html_parse_a_href_surrounded_hrefs.mjs";
import { http_cache_parse_parsed } from "./http_cache_parse_parsed.mjs";
import { list_size_equal } from "./list_size_equal.mjs";
import { list_add } from "./list_add.mjs";
export async function sandbox_3() {
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
    let chapters = await bible_chapters("engwebu", book_code);
    await each_index_async(chapters, async function (item, index2) {
      let split = string_split_dash(href);
      list_remove_last(split);
      list_add(split, string_combine_multiple([add_1(index2), "/"]));
      let href_new = list_join_dash(split);
      log({
        href_new,
      });
      return;
      await http_cache(href);
    });
  });
}
