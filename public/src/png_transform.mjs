import { png_overwrite } from "./png_overwrite.mjs";
export function png_transform(path_in, path_out, transform) {
  fs.createReadStream(path_in)
    .pipe(
      new PNG({
        filterType: 4,
      }),
    )
    .on("parsed", async function () {
      let image = this;
      transform(image);
      await png_overwrite(path_out, image);
    });
}
