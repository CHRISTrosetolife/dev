import { app_bible_ceb_verse } from "./app_bible_ceb_verse.mjs";
import { app_record_generic } from "./app_record_generic.mjs";
export async function app_bible_ceb_generic(fn) {
  await app_record_generic("engbsb", fn, app_bible_ceb_verse, false);
}
