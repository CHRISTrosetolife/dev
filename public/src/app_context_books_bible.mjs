import { app_memorize_version_code_get } from "./app_memorize_version_code_get.mjs";
import { bible_storage_version_http_get } from "./bible_storage_version_http_get.mjs";
import { object_merge } from "./object_merge.mjs";
export async function app_context_books_bible(context) {
  let version_code = app_memorize_version_code_get(context);
  let { books } = await bible_storage_version_http_get("books", version_code);
  object_merge(context, {
    books,
  });
}
