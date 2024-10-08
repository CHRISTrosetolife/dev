import { string_is } from "./string_is.mjs";
import { assert } from "./assert.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { bible_ebible_url_combine } from "./bible_ebible_url_combine.mjs";
export function bible_zip_url(bible_folder) {
  assert(string_is, [bible_folder]);
  return bible_ebible_url_combine(
    string_combine_multiple(["Scriptures/", bible_folder, "_html.zip"]),
  );
}
