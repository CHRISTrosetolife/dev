import { bible_eng_versions_each } from "./bible_eng_versions_each.mjs";
import { html_button_text_click } from "./html_button_text_click.mjs";
import { app_memorize_refresh_memorize_load } from "./app_memorize_refresh_memorize_load.mjs";
import { html_button_width_full_text_click_back } from "./html_button_width_full_text_click_back.mjs";
import { app_memorize_chapter_get } from "./app_memorize_chapter_get.mjs";
import { app_memorize_book_code_get } from "./app_memorize_book_code_get.mjs";
import { app_memorize_refresh_settings_chapter } from "./app_memorize_refresh_settings_chapter.mjs";
import { app_memorize_chapter_set } from "./app_memorize_chapter_set.mjs";
import { app_memorize_save_get } from "./app_memorize_save_get.mjs";
import { app_memorize_settings_button_back } from "./app_memorize_settings_button_back.mjs";
import { app_memorize_settings_button_back_clear } from "./app_memorize_settings_button_back_clear.mjs";
import { object_merge } from "./object_merge.mjs";
import { app_record_home_generic } from "./app_record_home_generic.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { app_memorize_save } from "./app_memorize_save.mjs";
import { app_memorize_refresh_memorize } from "./app_memorize_refresh_memorize.mjs";
import { each_index } from "./each_index.mjs";
import { list_get } from "./list_get.mjs";
import { app_memorize_group_current_set } from "./app_memorize_group_current_set.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
import { html_button } from "./html_button.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_memorize_group_to_range_string } from "./app_memorize_group_to_range_string.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export function app_memorize_refresh_settings(context) {
  let { root } = context;
  html_clear_scroll_top(root);
  let save = app_memorize_save_get(context);
  html_button_width_full_text_click_back(root, async () => {
    await app_memorize_refresh_memorize(context);
  });
  let book_code = app_memorize_book_code_get(context);
  html_button_width_full_text_click(
    root,
    string_combine_multiple(["translation "]),
    async () => {
      app_memorize_settings_button_back_clear(context);
      html_p_text(
        root,
        "which translation of the bible do you want to memorize from ?",
      );
      await bible_eng_versions_each((version_code) => {
        html_button_text_click(root, version_code, async function () {
          object_merge(save, {
            version_code,
          });
          app_memorize_save(context);
          await app_memorize_refresh_memorize_load(context);
        });
      });
    },
  );
  html_button_width_full_text_click(
    root,
    string_combine_multiple(["book ", book_code]),
    () => {
      app_record_home_generic(
        context,
        () => {
          app_memorize_settings_button_back(context);
          html_p_text(root, "which book do you want to memorize from ?");
        },
        async (context, book_code) => {
          object_merge(save, {
            book_code,
          });
          app_memorize_chapter_set(context, "1");
          app_memorize_refresh_settings_chapter(context);
          await app_memorize_refresh_memorize_load(context);
        },
      );
    },
  );
  let chapter = app_memorize_chapter_get(context);
  html_button_width_full_text_click(
    root,
    string_combine_multiple(["chapter ", chapter]),
    () => {
      app_memorize_refresh_settings_chapter(context);
    },
  );
  html_button_width_full_text_click(
    root,
    string_combine_multiple([
      "verses ",
      app_memorize_group_to_range_string(context, save.group_current),
    ]),
    () => {
      app_memorize_settings_button_back_clear(context);
      html_p_text(root, "which verse range do you want to focus on ?");
      for (let g of context.groups) {
        let b = html_button(root);
        html_inner_set(b, app_memorize_group_to_range_string(context, g));
        html_on_click(b, () => {
          app_memorize_group_current_set(context, g, true);
          app_memorize_refresh_settings(context);
        });
      }
    },
  );
  html_button_width_full_text_click(
    root,
    string_combine_multiple([
      "pattern ",
      list_get(context.patterns, save.pattern_index),
    ]),
    () => {
      app_memorize_settings_button_back_clear(context);
      html_p_text(
        root,
        "which pattern of shown and hidden words do you want ?",
      );
      each_index(context.patterns, (p, i) => {
        let b = html_button(root);
        html_inner_set(b, p);
        html_on_click(b, () => {
          save.pattern_index = i;
          app_memorize_save(context);
          app_memorize_refresh_settings(context);
        });
      });
    },
  );
}
