import { list_map_property } from "./list_map_property.mjs";
import { list_concat } from "./list_concat.mjs";
import { bible_storage_version_http_get } from "./bible_storage_version_http_get.mjs";
export async function app_contact_adds() {
  let { books } = await bible_storage_version_http_get("engbsb", "books");
  let books_names = list_map_property(books, "book_name");
  let v = [
    "god",
    "greetings",
    "today",
    "scriptures",
    "god's",
    "sending",
    "it's",
    "how're",
    "hi",
  ];
  let v2 = list_concat(v, books);
  return v2;
}
