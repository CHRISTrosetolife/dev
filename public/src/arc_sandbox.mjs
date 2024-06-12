import { list_all } from "./list_all.mjs";
import { assert_message } from "./assert_message.mjs";
import { equal } from "./equal.mjs";
import { each } from "./each.mjs";
import { string_combine } from "./string_combine.mjs";
import { folder_downloads_repository } from "./folder_downloads_repository.mjs";
import { folder_read } from "./folder_read.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { assert } from "./assert.mjs";
import { list_is } from "./list_is.mjs";
import { list_length } from "./list_length.mjs";
import { list_first } from "./list_first.mjs";
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
        let first = list_first(io);
        let length = list_length(first);
        let same = list_all(io, (row) => equal(list_length(row), length));
        assert_message();
      });
    });
  });
}
