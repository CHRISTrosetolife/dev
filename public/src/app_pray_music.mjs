import { html_button } from "./html_button.mjs";
import { app_pray_word } from "./app_pray_word.mjs";
import { html_prayer } from "./html_prayer.mjs";
import { html_button_previous_text } from "./html_button_previous_text.mjs";
import { html_button_next_text } from "./html_button_next_text.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_get } from "./list_get.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { list_size } from "./list_size.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
export function app_pray_music(index) {
  let root = html_document_body();
  let prayers = [
    list_concat_multiple([
      [
        "Thank You for helping me (previous or:) upload;",
        "Cause all to perfectly worship You;",
      ],
      app_pray_word(),
      [
        "Cause me to sing perfectly;",
        "Cause me to compose perfectly;",
        "Cause me to play piano perfectly;",
        "Please help me video;",
      ],
    ]),
    ["Thank You for helping me video;", "Please help me review;"],
    ["Thank You for helping me review;", "Please help me upload;"],
  ];
  let prayers_size = list_size(prayers);
  while (index < 0) {
    index += prayers_size;
  }
  index = index % prayers_size;
  html_clear_scroll_top_centered(root);
  let prayer = list_get(prayers, index);
  html_prayer(root, prayer);
  let next = html_button(
    root,
    string_combine_multiple([html_button_next_text(), " prayer"]),
    () => {
      index++;
      app_pray_music(index);
    },
  );
  let previous = html_button(
    root,
    string_combine_multiple([html_button_previous_text(), " prayer"]),
    async () => {
      index--;
      app_pray_music(index);
    },
  );
  return index;
}
