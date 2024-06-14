import fs from "fs";
import { PNG } from "pngjs";
export async function sandbox_2() {
  let out = "public\\img\\shubibubi\\animals\\bunny2.png";
  fs.createReadStream("public\\img\\shubibubi\\animals\\bunny.png")
    .pipe(
      new PNG({
        filterType: 4,
      }),
    )
    .on("parsed", function () {
      let image = this;
      image.height = image.height / 4;
      for (var y = 0; y < image.height; y++) {
        for (var x = 0; x < image.width; x++) {
          var idx = (image.width * y + x) << 2;
          image.data[idx] = 255 - image.data[idx];
          image.data[idx + 1] = 255 - image.data[idx + 1];
          image.data[idx + 2] = 255 - image.data[idx + 2];
          image.data[idx + 3] = image.data[idx + 3] >> 1;
        }
      }
      image.pack().pipe(fs.createWriteStream(out)).on("finish", resolve);
    });
}
