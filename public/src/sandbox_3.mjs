import { bible_chapters } from "./bible_chapters.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_suffix_change } from "./string_suffix_change.mjs";
import { list_get } from "./list_get.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { assert } from "./assert.mjs";
import { http_cache } from "./http_cache.mjs";
import { html_parse_a_href_surrounded_hrefs } from "./html_parse_a_href_surrounded_hrefs.mjs";
import { http_cache_parse_parsed } from "./http_cache_parse_parsed.mjs";
import { list_size_equal } from "./list_size_equal.mjs";
export async function sandbox_3() {
  let u =
    "https://bible.catholicgallery.org/world-english-bible-with-deuterocanon/";
  let { root } = await http_cache_parse_parsed(u);
  let suffix = "-1/";
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
  assert(list_size_equal, [books, hrefs]);
  await each_index_async(hrefs, async function (href, index) {
    let book_code = list_get(books, index);
    await bible_chapters();
    string_suffix_change(href, suffix, string_combine_multiple(["-", n, "/"]));
    await http_cache(href);
  });
}
