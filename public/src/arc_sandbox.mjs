import { list_map } from "./list_map.mjs";
import { arc_coordinates } from "./arc_coordinates.mjs";
import { each_async } from "./each_async.mjs";
import { integer_parse } from "./integer_parse.mjs";
import { each_object } from "./each_object.mjs";
import { number_is } from "./number_is.mjs";
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
import { list_unique } from "./list_unique.mjs";
export async function arc_sandbox() {
  let training = string_combine(
    folder_downloads_repository("ARC-AGI"),
    "data\\training",
  );
  let files = await folder_read(training, ".json");
  await each_async(files, async (file) => {
    let o = await file_read_json(file);
    let { train, test } = o;
    assert(list_is, [train]);
    each(train, (t) => {
      let { input, output } = t;
      each([input, output], (io) => {
        assert_message(list_rectangular_is, [io]);
        let flattened = list_concat_multiple(input);
        let unique = list_unique(flattened);
        each(unique, (u) => assert(number_is, [u]));
      });
      each([input, output], (io) => {
        let flattened = list_concat_multiple(io);
        let choices = string_count_lookup(flattened);
        log({
          choices,
        });
        each_object(choices, (key, value) => {
          let p = integer_parse(key);
          if (p !== 0) {
            let coordinates = arc_coordinates(io, p);
            let xs = list_map(coordinates, "x");
            log({
              coordinates,
              key,
            });
          }
        });
      });
      exit();
    });
  });
}
