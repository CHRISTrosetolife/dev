import { string_random_or_empty } from "./string_random_or_empty.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_random_item } from "./list_random_item.mjs";
export function app_gs_phrase_the_gospel() {
  return list_random_item([
    string_combine_multiple([
      "the ",
      list_random_item([
        "Word of God",
        string_combine_multiple([
          list_random_item(["gospel", "good news"]),
          string_random_or_empty(
            string_combine_multiple([
              " of Jesus",
              string_random_or_empty(" Christ"),
            ]),
          ),
        ]),
      ]),
    ]),
    "Jesus",
  ]);
}
