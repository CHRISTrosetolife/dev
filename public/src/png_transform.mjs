import { png_overwrite } from "./png_overwrite.mjs";
import fs from "fs";
export async function png_transform(path_in, path_out, transform) {
  let image = await new Promise((resolve) => {
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
  transform(image);
  await png_overwrite(path_out, image);
}
