import fs from "fs";
export async function png_overwrite(output_file_path, image) {
  await new Promise((resolve) => {
    image
      .pack()
      .pipe(fs.createWriteStream(output_file_path))
      .on("finish", () => resolve());
  });
}
