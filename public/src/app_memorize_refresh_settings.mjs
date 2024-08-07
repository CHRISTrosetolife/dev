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
import { html_clear } from "./html_clear.mjs";
export function app_memorize_refresh_settings(context) {
  let { root } = context;
  html_clear(root);
  html_button_width_full_text_click(root, "back", () => {
    app_memorize_refresh_memorize(context);
  });
  html_button_width_full_text_click(
    root,
    string_combine_multiple([
      "verses ",
      app_memorize_group_to_range_string(context, context.save.group_current),
    ]),
    () => {
      html_clear(root);
      html_button_width_full_text_click(root, "back", () => {
        app_memorize_refresh_settings(context);
      });
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
      list_get(context.patterns, context.save.pattern_index),
    ]),
    () => {
      html_clear(root);
      html_button_width_full_text_click(root, "back", () => {
        app_memorize_refresh_settings(context);
      });
      html_p_text(
        root,
        "which pattern of shown and hidden words do you want ?",
      );
      each_index(context.patterns, (p, i) => {
        let b = html_button(root);
        html_inner_set(b, p);
        html_on_click(b, () => {
          context.save.pattern_index = i;
          app_memorize_save(context);
          app_memorize_refresh_settings(context);
        });
      });
    },
  );
}
