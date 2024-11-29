import { app_record_generic } from "./app_record_generic.mjs";
import { app_bible_verse } from "./app_bible_verse.mjs";
export async function app_bible() {
  await app_record_generic("engbsb", app_bible, app_bible_verse);
}
