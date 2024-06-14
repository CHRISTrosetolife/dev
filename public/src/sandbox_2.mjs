import { file_delete_if_exists } from "./file_delete_if_exists.mjs";
import fs from "fs";
import { PNG } from "pngjs";
export async function sandbox_2() {
  let out = "public\\img\\shubibubi\\animals\\bunny2.png";
  await file_delete_if_exists();
  fs.createReadStream("public\\img\\shubibubi\\animals\\bunny.png")
    .pipe(
      new PNG({
        filterType: 4,
      }),
    )
    .on("parsed", function () {
      for (var y = 0; y < this.height; y++) {
        for (var x = 0; x < this.width; x++) {
          var idx = (this.width * y + x) << 2;
          this.data[idx] = 255 - this.data[idx];
          this.data[idx + 1] = 255 - this.data[idx + 1];
          this.data[idx + 2] = 255 - this.data[idx + 2];
          this.data[idx + 3] = this.data[idx + 3] >> 1;
        }
      }
      this.pack().pipe(
        fs.createWriteStream("public\\img\\shubibubi\\animals\\bunny2.png"),
      );
    });
}
