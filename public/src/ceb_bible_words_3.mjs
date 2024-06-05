import { bible_ceb_3_chapter } from "./bible_ceb_3_chapter.mjs";
import { bible_ceb_3_hrefs } from "./bible_ceb_3_hrefs.mjs";
import { bible_ceb_3_url_base } from "./bible_ceb_3_url_base.mjs";
import { each_index_async } from "./each_index_async.mjs";
export async function ceb_bible_words_3() {
  let hrefs = await bible_ceb_3_hrefs();
  await each_index_async(hrefs, async (href_, index) => {
    let url_base = bible_ceb_3_url_base();
    await bible_ceb_3_chapter(index, url_base);
  });
}
