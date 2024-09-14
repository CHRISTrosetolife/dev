import { html_cache_parse_hrefs } from "./html_cache_parse_hrefs.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_find_properties } from "./list_find_properties.mjs";
import { list_get } from "./list_get.mjs";
import { each_range } from "./each_range.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_size } from "./list_size.mjs";
import { string_combine } from "./string_combine.mjs";
import { list_map } from "./list_map.mjs";
import { string_ends_with } from "./string_ends_with.mjs";
import { url_secure_w3 } from "./url_secure_w3.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function bible_ceb_2_books_hrefs() {
  let url_base = string_combine_multiple([
    url_secure_w3(),
    "talibon.com/bible/",
  ]);
  let url = string_combine_multiple([url_base, "bible.html"]);
  let book_hrefs = await html_cache_parse_hrefs(url, condition);
  function condition(href) {
    return string_ends_with(href, ".html");
  }
  book_hrefs = list_map(book_hrefs, (href) => string_combine(url_base, href));
  let columns = 7;
  let rows = 10;
  let book_hrefs_size = list_size(book_hrefs);
  let columns_full = columns - 1;
  let columns_full_count = columns_full * rows;
  let rows_full = book_hrefs_size - columns_full_count;
  let rows_missing = rows - rows_full;
  let indexed = list_adder((la) => {
    let index = 0;
    each_range(rows_full, (row) => {
      each_range(columns, (column) => {
        la({
          row,
          column,
          href: list_get(book_hrefs, index),
        });
        index++;
      });
    });
    each_range(rows_missing, (row_missing) => {
      each_range(columns_full, (column) => {
        la({
          row: row_missing + rows_full,
          column,
          href: list_get(book_hrefs, index),
        });
        index++;
      });
    });
  });
  book_hrefs = list_adder((la) => {
    each_range(columns, (column) => {
      each_range(rows, (row) => {
        if (column === columns - 1 && row >= rows_full) {
          return;
        }
        let m = list_find_properties(indexed, {
          row,
          column,
        });
        la(object_property_get(m, "href"));
      });
    });
  });
  return book_hrefs;
}
