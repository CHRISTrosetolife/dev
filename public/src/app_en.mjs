import { app_ceb } from "./app_ceb.mjs";
import { app_language } from "./app_language.mjs";
export async function app_en() {
  await app_language(app_ceb, "en", "ceb");
}
