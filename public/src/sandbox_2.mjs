import { range_1 } from "./range_1.mjs";
import { each_async } from "./each_async.mjs";
import { bible_chapter_video } from "./bible_chapter_video.mjs";
export async function sandbox_2() {
  await each_async(range_1(5), async (item) => {
    await bible_chapter_video("calm", "engbsb", "MAT0" + item);
  });
}
