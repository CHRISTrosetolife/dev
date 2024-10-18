import { range_from } from "./range_from.mjs";
import { app_gs_bible_chapter_name } from "./app_gs_bible_chapter_name.mjs";
import { each_async } from "./each_async.mjs";
import { bible_chapter_video } from "./bible_chapter_video.mjs";
export async function sandbox_2() {
  let book_id = "JER";
  let low = 18;
  let high = 52;
  await each_async(range_from(low, high), async (item) => {
    await bible_chapter_video(
      "calm",
      "engbsb",
      app_gs_bible_chapter_name(book_id, item),
    );
  });
}
