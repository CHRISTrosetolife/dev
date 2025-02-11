import { app_bible_ceb_verse } from "./app_bible_ceb_verse.mjs";
import { app_record_generic } from "./app_record_generic.mjs";
export async function app_bible_ceb() {
  await app_record_generic("engbsb", app_bible_ceb, app_bible_ceb_verse, false);
}
