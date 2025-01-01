import { object_merge } from "./object_merge.mjs";
import { bible_storage_version_http_get } from "./bible_storage_version_http_get.mjs";
export async function app_context_books_bible_generic(context, version_code) {
  let { books } = await bible_storage_version_http_get(version_code, "books");
  object_merge(context, {
    books,
  });
}
