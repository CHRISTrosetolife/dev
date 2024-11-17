import { html_button_previous_text } from "./html_button_previous_text.mjs";
import { html_button_next_text } from "./html_button_next_text.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { list_get } from "./list_get.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { html_p_text_multiple } from "./html_p_text_multiple.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { list_size } from "./list_size.mjs";
export function app_pray_music(index) {
  let root = html_document_body();
  let prayers = [
    [
      "Thank You for helping me (previous or:) upload;",
      "Cause the word of God to be perfectly engrafted into my heart;",
      "Cause the planting and watering of the word of God to have perfectly maximized increase;",
      "Cause me to perfectly worship You;",
      "Cause me to be a perfect hearer of the word of God;",
      "Cause my eyes and ears to perfectly be opened up to Scripture and truth;",
      "Cause me to be a perfect doer of the word of God;",
      "Cause me to sing perfectly;",
      "Cause me to compose perfectly;",
      "Cause me to play piano perfectly;",
      "Please help me video;",
    ],
    ["Thank You for helping me video;", "Please help me review;"],
    ["Thank You for helping me review;", "Please help me upload;"],
  ];
  index = index % list_size(prayers);
  html_clear_scroll_top_centered(root);
  html_p_text_multiple(
    root,
    list_concat_multiple([
      [
        "Heavenly Father,",
        "In the name of the Trinity:",
        "Have mercy on me, a sinner;",
      ],
      list_get(prayers, index),
      ["Amen"],
    ]),
  );
  let next = html_button_width_full_text_click(
    root,
    string_combine_multiple([html_button_next_text(), " prayer"]),
    () => {
      index++;
      app_pray_music(index);
    },
  );
  let previous = html_button_width_full_text_click(
    root,
    string_combine_multiple([html_button_previous_text(), " prayer"]),
    async () => {
      index--;
      app_pray_music(index);
    },
  );
  return index;
}
