import { app_memorize_save_get } from "./app_memorize_save_get.mjs";
import { object_property_delete } from "./object_property_delete.mjs";
import { app_record_book_generic } from "./app_record_book_generic.mjs";
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
  html_button_width_full_text_click(root, "back", () => {
    app_memorize_refresh_memorize(context);
  });
  html_button_width_full_text_click(
    root,
    string_combine_multiple(["book"]),
    () => {
      app_record_home_generic(
        context,
        () => {
          app_memorize_settings_button_back(context);
          html_p_text(root, "which book do you want to memorize from ?");
        },
        (context, book_code) => {
          object_merge(save, {
            book_code,
          });
          let chapter = "1";
          object_merge(save, {
            chapter,
          });
          object_property_delete();
          app_memorize_save(context);
        },
      );
    },
  );
  html_button_width_full_text_click(
    root,
    string_combine_multiple(["chapter"]),
    () => {
      let { book_code } = context.save;
      app_record_book_generic(
        context,
        () => {
          app_memorize_settings_button_back(context);
          html_p_text(
            root,
            string_combine_multiple([
              "which chapter in ",
              book_code,
              " do you want to memorize from ?",
            ]),
          );
        },
        book_code,
        (context, book_code, chapter) => {
          object_merge(save, {
            chapter,
          });
          app_memorize_save(context);
          app_memorize_refresh_memorize(context);
        },
      );
      app_record_home_generic(
        context,
        () => {
          app_memorize_settings_button_back(context);
          html_p_text(root, "which book do you want to memorize from ?");
        },
        (context, book_code) => {
          object_merge(save, {
            book_code,
          });
          app_memorize_save(context);
        },
      );
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
          app_memorize_group_current_set(context, g);
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
