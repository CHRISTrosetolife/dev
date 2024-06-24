import { html_remove } from "./html_remove.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { app_gs_menu_main } from "./app_gs_menu_main.mjs";
import { html_button_width_full_text_click_back } from "./html_button_width_full_text_click_back.mjs";
import { html_clear } from "./html_clear.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_random_item } from "./list_random_item.mjs";
export function app_gs_menu_pray(context, menu_overlay) {
  html_clear(menu_overlay);
  html_button_width_full_text_click_back(menu_overlay, () =>
    app_gs_menu_main(menu_overlay, map_c, map),
  );
  let prayer = string_combine_multiple([
    "🙏 God, please ",
    list_random_item([
      "bless",
      "go before me and prepare",
      "be with",
      "have Your will be done in",
      "give me the words to say for",
      "prepare our hearts",
    ]),
    " ",
    list_random_item(["my", "this"]),
    " next 👥 conversation, in the name of ",
    list_random_item(["the Lord", "our Savior", "King"]),
    " Jesus, amen.",
  ]);
  html_button_width_full_text_click(menu_overlay, prayer, () => {
    map.player.pray.conversation = true;
    html_remove(menu_overlay);
  });
}
