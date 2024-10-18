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
      await bible_chapter_video(
        "calm",
        "engbsb",
        app_gs_bible_chapter_name(a.book_id, item),
      );
    });
  });
}
