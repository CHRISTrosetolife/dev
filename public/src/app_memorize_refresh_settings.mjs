import { app_memorize_refresh_settings_version } from "./app_memorize_refresh_settings_version.mjs";
import { html_button_next_text } from "./html_button_next_text.mjs";
import { app_memorize_version_code_get } from "./app_memorize_version_code_get.mjs";
import { html_button_width_full_text_click_next } from "./html_button_width_full_text_click_next.mjs";
import { html_hr } from "./html_hr.mjs";
import { each } from "./each.mjs";
import { html_clear_scroll_top_context } from "./html_clear_scroll_top_context.mjs";
import { string_includes } from "./string_includes.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { http_storage_get } from "./http_storage_get.mjs";
import { bible_storage_path_copyrights } from "./bible_storage_path_copyrights.mjs";
import { bible_eng_versions_each } from "./bible_eng_versions_each.mjs";
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
import { html_style_success } from "./html_style_success.mjs";
export async function app_memorize_refresh_settings(context) {
  let { root } = context;
  html_clear_scroll_top(root);
  let save = app_memorize_save_get(context);
  html_button_width_full_text_click_back(root, async () => {
    await app_memorize_refresh_memorize(context);
  });
  let version_code_current = app_memorize_version_code_get(context);
  let destination = bible_storage_path_copyrights();
  let copyrights = await http_storage_get(destination);
  html_button_width_full_text_click(
    root,
    string_combine_multiple([
      "translation ",
      object_property_get(
        object_property_get(copyrights, version_code_current),
        "name",
      ),
    ]),
    async () => {
      app_memorize_settings_button_back_clear(context);
      html_p_text(
        root,
        "which translation of the bible do you want to memorize from ?",
      );
      await bible_eng_versions_each((version_code) => {
        let { copyright, name, description } = object_property_get(
          copyrights,
          version_code,
        );
        let b = html_button_width_full_text_click(
          root,
          name,
          async function () {
            if (string_includes(copyright, "Public Domain")) {
              await app_memorize_refresh_settings_version(
                context,
                version_code,
              );
            } else {
              html_clear_scroll_top_context(context);
              each(
                [
                  string_combine_multiple([
                    'press "',
                    html_button_next_text(),
                    '" at the bottom to continue"',
                  ]),
                  name,
                  description,
                  copyright,
                ],
                (text) => {
                  html_p_text(root, text);
                  html_hr(root);
                },
              );
              html_button_width_full_text_click_next(
                root,
                async () =>
                  await app_memorize_refresh_settings_version(
                    context,
                    version_code,
                  ),
              );
            }
          },
        );
        let actual = object_property_get(save, "version_code");
        if (version_code === actual) {
          html_style_success(b);
        }
      });
    },
  );
  let book_code = app_memorize_book_code_get(context);
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
        null,
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
        html_on_click(b, async () => {
          app_memorize_group_current_set(context, g, true);
          await app_memorize_refresh_settings(context);
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
        html_on_click(b, async () => {
          save.pattern_index = i;
          app_memorize_save(context);
          await app_memorize_refresh_settings(context);
        });
      });
    },
  );
}
