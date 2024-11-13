import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
import { html_button_previous_text } from "./html_button_previous_text.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_previous } from "./list_previous.mjs";
import { html_button_next_text } from "./html_button_next_text.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { html_p_text_multiple } from "./html_p_text_multiple.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_get } from "./list_get.mjs";
export function app_pray() {
  let root = html_style_default_initialize();
  let prayers = [
    [
      "Thank You for (previous);",
      "Cause the word of God to be perfectly engrafted into my heart;",
      "Cause me to perfectly worship You;",
      "Cause me to be a perfect hearer of the word of God;",
      "Cause my eyes and ears to perfectly be opened up to Scripture and truth;",
      "Cause me to be a perfect doer of the word of God;",
      "Cause me to sing perfectly;",
      "Cause me to compose perfectly;",
      "Cause me to play piano perfectly;",
      "Help me video;",
    ],
  ];
  let index = 0;
  html_clear_scroll_top_centered(root);
  html_p_text_multiple(
    root,
    list_concat_multiple([
      ["Heavenly Father,", "in the name of the Trinity:"],
      list_get(prayers, 0),
      ["Amen"],
    ]),
  );
  let next = html_button_width_full_text_click(
    root,
    string_combine_multiple([html_button_next_text(), " prayer"]),
    verse_next,
  );
  let previous = html_button_width_full_text_click(
    root,
    string_combine_multiple([html_button_previous_text(), " prayer"]),
    async () => {
      let verse_previous = list_previous(verses, verse);
      await verse_refresh(
        context,
        book_code,
        chapter,
        object_property_get(verse_previous, "verse_number"),
      );
    },
  );
}
