import fs from "fs";
export async function png_read(path_in) {
  return await new Promise((resolve) => {
    fs.createReadStream(path_in)
      .pipe(
        new PNG({
          filterType: 4,
        }),
      )
      .on("parsed", async function () {
        let image = this;
        resolve(image);
      });
  });
}
