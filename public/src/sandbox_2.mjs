import { app_record_project_name } from "./app_record_project_name.mjs";
import { bible_chapter_images } from "./bible_chapter_images.mjs";
import { range_from } from "./range_from.mjs";
import { app_gs_bible_chapter_name } from "./app_gs_bible_chapter_name.mjs";
import { each_async } from "./each_async.mjs";
import { bible_chapter_video } from "./bible_chapter_video.mjs";
export async function sandbox_2() {
  let as = [
    {
      book_id: "JER",
      low: 18,
      high: 52,
    },
    {
      book_id: "LAM",
      low: 1,
      high: 5,
    },
    {
      book_id: "EZK",
      low: 1,
      high: 11,
    },
    {
      book_id: "MAT",
      low: 1,
      high: 28,
    },
    {
      book_id: "MRK",
      low: 1,
      high: 16,
    },
    {
      book_id: "LUK",
      low: 1,
      high: 7,
    },
  ];
  await each_async(as, async (a) => {
    await each_async(range_from(a.low, a.high), async (item) => {
      let bible_folder = "engbsb";
      let chapter_name = app_gs_bible_chapter_name(a.book_id, item);
      let images = await bible_chapter_images(bible_folder, chapter_name);
      return;
      await bible_chapter_video(
        app_record_project_name(),
        bible_folder,
        chapter_name,
      );
    });
  });
}
