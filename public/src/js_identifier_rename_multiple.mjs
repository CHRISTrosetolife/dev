import { list_get } from "./list_get.mjs";
import { js_identifier_rename } from "./js_identifier_rename.mjs";
import { each_index_only } from "./each_index_only.mjs";
import { list_size_equal } from "./list_size_equal.mjs";
import { assert_message } from "./assert_message.mjs";
export function js_identifier_rename_multiple(
  ast,
  identifiers_from,
  identifiers_to,
) {
  assert_message(
    list_size_equal,
    [identifiers_from, identifiers_to],
    function () {},
  );
  each_index_only(identifiers_from, function (index) {
    js_identifier_rename(
      ast,
      list_get(identifiers_from, index),
      list_get(identifiers_to, index),
    );
  });
}
