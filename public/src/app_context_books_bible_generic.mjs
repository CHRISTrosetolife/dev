import { object_merge } from "./object_merge.mjs";
import { bible_storage_version_http_get } from "./bible_storage_version_http_get.mjs";
export async function app_context_books_bible_generic(version_code, context) {
  let { books } = await bible_storage_version_http_get("books", version_code);
  object_merge(context, {
    books,
  });
}
