import { app_context_books_bible_generic } from "./app_context_books_bible_generic.mjs";
import { app_memorize_version_code_get } from "./app_memorize_version_code_get.mjs";
export async function app_context_books_bible(context) {
  let version_code = app_memorize_version_code_get(context);
  await app_context_books_bible_generic(version_code, context);
}
