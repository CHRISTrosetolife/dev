import { object_property_get } from "./object_property_get.mjs";
import { bible_chapter_videos } from "./bible_chapter_videos.mjs";
import video_stitch from "video-stitch";
import { list_map } from "./list_map.mjs";
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
  let m = list_map(videos, (v) => object_property_get(object, property_name));
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
