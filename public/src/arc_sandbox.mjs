import { exit } from "./exit.mjs";
import { string_count_lookup } from "./string_count_lookup.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { log } from "./log.mjs";
import { list_rectangular_is } from "./list_rectangular_is.mjs";
import { assert_message } from "./assert_message.mjs";
import { each } from "./each.mjs";
import { string_combine } from "./string_combine.mjs";
import { folder_downloads_repository } from "./folder_downloads_repository.mjs";
import { folder_read } from "./folder_read.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { assert } from "./assert.mjs";
import { list_is } from "./list_is.mjs";
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
        assert_message(list_rectangular_is, [io]);
        let flattened = list_concat_multiple(input);
      });
      let flattened_i = list_concat_multiple(input);
      let choices_i = string_count_lookup(flattened_i);
      let flattened_o = list_concat_multiple(output);
      let choices_o = string_count_lookup(flattened_i);
      log({
        choices_i,
        choices_o,
      });
    });
    exit();
  });
}
