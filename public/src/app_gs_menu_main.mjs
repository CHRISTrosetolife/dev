import { html_button } from "./html_button.mjs";
import { html_button_back } from "./html_button_back.mjs";
import { app_gs_menu_study_bible } from "./app_gs_menu_study_bible.mjs";
import { app_gs_load } from "./app_gs_load.mjs";
import { app_gs_game_delete } from "./app_gs_game_delete.mjs";
import { app_gs_menu_pray } from "./app_gs_menu_pray.mjs";
import { app_gs_menu_tiles } from "./app_gs_menu_tiles.mjs";
import { app_gs_menu_system_logs } from "./app_gs_menu_system_logs.mjs";
import { html_remove } from "./html_remove.mjs";
import { html_clear } from "./html_clear.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function app_gs_menu_main(context, menu_overlay) {
  assert_arguments_length(arguments, 2);
  html_clear(menu_overlay);
  html_button_back(menu_overlay, () => {
    html_remove(menu_overlay);
  });
  html_button(menu_overlay, "🙏 pray", () => {
    app_gs_menu_pray(context, menu_overlay);
  });
  html_button(menu_overlay, "📖 study bible", async () => {
    await app_gs_menu_study_bible(menu_overlay, context);
  });
  html_button(menu_overlay, "🌱 new game", async () => {
    app_gs_game_delete();
    await app_gs_load(context);
    html_remove(menu_overlay);
  });
  html_button(menu_overlay, "💻 system logs", () => {
    app_gs_menu_system_logs(context, menu_overlay);
  });
  html_button(menu_overlay, "🟩 tiles", () => {
    app_gs_menu_tiles(context, menu_overlay);
  });
}
