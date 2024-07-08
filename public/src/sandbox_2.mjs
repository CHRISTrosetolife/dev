import { app_gs_bible_chapter_name } from "./app_gs_bible_chapter_name.mjs";
import { range_1 } from "./range_1.mjs";
import { each_async } from "./each_async.mjs";
import { bible_chapter_video } from "./bible_chapter_video.mjs";
export async function sandbox_2() {
  await each_async(range_1(9), async (item) => {
    let book_id = "MAT";
    await bible_chapter_video(
      "calm",
      "engbsb",
      app_gs_bible_chapter_name(book_id, item),
    );
  });
}
