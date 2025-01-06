import { app_bible_verse } from "./app_bible_verse.mjs";
import { app_bible } from "./app_bible.mjs";
import { app_record_generic } from "./app_record_generic.mjs";
export async function app_bible2() {
  await app_record_generic("engbsb", app_bible, app_bible_verse, false);
}
