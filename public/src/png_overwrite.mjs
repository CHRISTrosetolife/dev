import { folder_parent_exists_ensure } from "./folder_parent_exists_ensure.mjs";
import fs from "fs";
export async function png_overwrite(output_file_path, image) {
  folder_parent_exists_ensure;
  await new Promise((resolve) => {
    image
      .pack()
      .pipe(fs.createWriteStream(output_file_path))
      .on("finish", () => resolve());
  });
}
