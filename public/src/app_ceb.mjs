import { number_min } from "./number_min.mjs";
import { log } from "./log.mjs";
import { range } from "./range.mjs";
import { storage_url } from "./storage_url.mjs";
import { html_audio } from "./html_audio.mjs";
import { ceb_audio_path } from "./ceb_audio_path.mjs";
import { string_combine } from "./string_combine.mjs";
import { html_style_font_color } from "./html_style_font_color.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { html_buttons_next_previous } from "./html_buttons_next_previous.mjs";
import { list_scramble } from "./list_scramble.mjs";
import { list_copy } from "./list_copy.mjs";
import { http_storage } from "./http_storage.mjs";
import { ceb_group_path } from "./ceb_group_path.mjs";
import { list_first } from "./list_first.mjs";
import { list_get } from "./list_get.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { each } from "./each.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
import { html_style_centered } from "./html_style_centered.mjs";
import { list_index_last } from "./list_index_last.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { floor } from "./floor.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { string_take } from "./string_take.mjs";
import { string_skip } from "./string_skip.mjs";
import { string_length } from "./string_length.mjs";
export async function app_ceb() {
  let root = html_style_default_initialize();
  let group_index = 0;
  let group = await http_storage(ceb_group_path(group_index));
  let atom = list_first(group);
  let copy = list_copy(atom);
  list_scramble(copy);
  refresh_quiz(0);
  function refresh_quiz(pair_index) {
    let pair = list_get(copy, pair_index);
    let [cebuano, english] = pair;
    log({
      cebuano,
    });
    let split_size = 1;
    let length = string_length(english);
    let adjusted = floor(divide(length, split_size));
    for (let i of range(adjusted)) {
      let scaled = multiply(i, split_size);
      let skipped = string_skip(cebuano, scaled);
      let limit = string_length(skipped);
      let taken = string_take(skipped, number_min(split_size, limit));
      log({
        taken,
      });
    }
  }
  async function refresh_pair(pair_index) {
    html_clear_scroll_top(root);
    let pair = list_get(copy, pair_index);
    let [cebuano, english] = pair;
    let file_path = ceb_audio_path(0, cebuano);
    let cebuano_p = html_button_width_full_text_click(
      root,
      string_combine("👂", cebuano),
      async () => {
        return await html_audio(storage_url(file_path));
      },
    );
    html_style_font_color(cebuano_p, "darkgreen");
    let english_p = html_p_text(root, english);
    each([html_style_bold, html_style_centered], (style) =>
      each([cebuano_p, english_p], style),
    );
    html_buttons_next_previous(
      root,
      refresh_pair,
      pair_index,
      list_index_last(copy),
    );
    await html_audio(storage_url(file_path));
  }
}
