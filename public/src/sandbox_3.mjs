import { kokoro_tts_apocrypha } from "./kokoro_tts_apocrypha.mjs";
export async function sandbox_3() {
  let bible_folder = "engwebu";
  await kokoro_tts_apocrypha(bible_folder);
}
