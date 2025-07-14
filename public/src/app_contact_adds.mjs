import { countries_names } from "./countries_names.mjs";
import { app_contact_phrase_list_greetings } from "./app_contact_phrase_list_greetings.mjs";
import { global_function_property_initialize } from "./global_function_property_initialize.mjs";
import { bible_reference_separator } from "./bible_reference_separator.mjs";
import { digits_10 } from "./digits_10.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { bible_storage_version_http_get } from "./bible_storage_version_http_get.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
export async function app_contact_adds() {
  let { books } = await bible_storage_version_http_get("engbsb", "books");
  let bible_books_names = list_map_property(books, "book_name");
  global_function_property_initialize(
    app_contact_adds,
    "bible_books_names",
    bible_books_names,
  );
  let c = countries_names();
  let v = [
    bible_reference_separator(),
    "god",
    "today",
    "scriptures",
    "god's",
    "sending",
    "it's",
    "how're",
  ];
  let v2 = list_concat_multiple([
    v,
    bible_books_names,
    app_contact_phrase_list_greetings(),
    c,
    digits_10(),
  ]);
  return v2;
}
