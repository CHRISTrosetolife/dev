import { sqrt } from "./sqrt.mjs";
import { round } from "./round.mjs";
import { each } from "./each.mjs";
import { string_combine } from "./string_combine.mjs";
import { folder_downloads_repository } from "./folder_downloads_repository.mjs";
import { folder_read } from "./folder_read.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { error } from "./error.mjs";
import { assert } from "./assert.mjs";
import { list_is } from "./list_is.mjs";
import { list_length } from "./list_length.mjs";
export async function arc_sandbox() {
  let training = string_combine(
    folder_downloads_repository("ARC-AGI"),
    "data\\training",
  );
  let files = await folder_read(training, ".json");
  each(files, async (file) => {
    let o = await file_read_json(file);
    let { train, test } = o;
    assert(list_is, [train]);
    each(train, (t) => {
      let { input, output } = t;
      each([input, output], (io) => {
        assert(list_is, [io]);
        let length = list_length(io);
        let s = round(sqrt(length));
        let sq = s * s;
      });
    });
    error();
  });
}
