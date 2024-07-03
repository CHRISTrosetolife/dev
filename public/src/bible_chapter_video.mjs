import { bible_chapter_videos } from "./bible_chapter_videos.mjs";
import video_stitch from "video-stitch";
export async function bible_chapter_video(
  project_name,
  bible_folder,
  chapter_name,
) {
  let videos = await bible_chapter_videos(
    project_name,
    bible_folder,
    chapter_name,
  );
  return new Promise((resolve) => {
    video_stitch
      .concat({
        silent: true,
        overwrite: true,
      })
      .clips([
        {
          fileName: "FILENAME",
        },
        {
          fileName: "FILENAME",
        },
        {
          fileName: "FILENAME",
        },
      ])
      .output("myfilename")
      .concat();
  });
}
