import video_stitch from "video-stitch";
export function bible_chapter_video(project_name, bible_folder, chapter_name) {
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
