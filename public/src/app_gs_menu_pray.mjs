import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { app_gs_menu_main } from "./app_gs_menu_main.mjs";
import { html_button_width_full_text_click_back } from "./html_button_width_full_text_click_back.mjs";
import { html_clear } from "./html_clear.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_random_item } from "./list_random_item.mjs";
export function app_gs_menu_pray(menu_overlay, map_c, map) {
  html_clear(menu_overlay);
  html_button_width_full_text_click_back(menu_overlay, () =>
    app_gs_menu_main(menu_overlay, map_c, map),
  );
  let prayer = string_combine_multiple([
    "🙏 God, please ",
    list_random_item(["bless"]),
    " my next 👥 conversation, in the name of Jesus, amen.",
  ]);
  html_button_width_full_text_click(menu_overlay, prayer, () => {
    map.player.pray.conversation = true;
  });
}
