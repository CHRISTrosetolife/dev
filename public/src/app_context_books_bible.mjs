import { object_merge } from "./object_merge.mjs";
import { bible_engbsb_storage_http_get } from "./bible_engbsb_storage_http_get.mjs";
export async function app_context_books_bible(context) {
  let { books } = await bible_engbsb_storage_http_get("books");
  object_merge(context, {
    books,
  });
}
