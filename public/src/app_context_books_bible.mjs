import { bible_storage_version_http_get } from "./bible_storage_version_http_get.mjs";
import { object_merge } from "./object_merge.mjs";
export async function app_context_books_bible(context) {
  let version_code = "engbsb";
  let { books } = await bible_storage_version_http_get("books", version_code);
  object_merge(context, {
    books,
  });
}
