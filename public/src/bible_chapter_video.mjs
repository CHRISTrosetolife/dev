import { bible_chapter_folder_parent_gitignore } from "./bible_chapter_folder_parent_gitignore.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { bible_chapter_videos } from "./bible_chapter_videos.mjs";
import video_stitch from "video-stitch";
import { list_map } from "./list_map.mjs";
export async function bible_chapter_video(
  project_name,
  bible_folder,
  chapter_name,
) {
  let output_path_folder = bible_chapter_folder_parent_gitignore(
    "video",
    bible_folder,
    chapter_name,
  );
  let videos = await bible_chapter_videos(
    project_name,
    bible_folder,
    chapter_name,
  );
  let m = list_map(videos, (v) => ({
    fileName: object_property_get(object_property_get(v, "path"), "vertical"),
  }));
  return new Promise((resolve) => {
    video_stitch
      .concat({
        silent: true,
        overwrite: true,
      })
      .clips(m)
      .output("myfilename")
      .concat();
  });
}
