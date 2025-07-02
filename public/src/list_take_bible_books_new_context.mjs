import { object_property_get } from "./object_property_get.mjs";
import { list_take_bible_books_new } from "./list_take_bible_books_new.mjs";
export function list_take_bible_books_new_context(context) {
  return list_take_bible_books_new(object_property_get(context, "books"));
}
