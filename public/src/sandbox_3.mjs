import { bible_ceb_3_hrefs } from "./bible_ceb_3_hrefs.mjs";
import { ceb_bible_words_3 } from "./ceb_bible_words_3.mjs";
export async function sandbox_3() {
  return bible_ceb_3_hrefs;
  return await ceb_bible_words_3({
    new: true,
  });
}
