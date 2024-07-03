import { bible_image_path } from "./bible_image_path.mjs";
import { folder_gitignore_path } from "./folder_gitignore_path.mjs";
import videoshow from "videoshow";
export function sandbox_2() {
  return new Promise((resolve, reject) => {
    videoshow([bible_image_path()])
      .save(folder_gitignore_path("video.mp4"))
      .on("error", function (e) {
        reject(e);
      })
      .on("end", function () {
        resolve();
      });
  });
}
