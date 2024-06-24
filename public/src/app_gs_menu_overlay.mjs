import { html_style } from "./html_style.mjs";
import { app_gs_div_rounded_transparent } from "./app_gs_div_rounded_transparent.mjs";
import { game_img_style_generic } from "./game_img_style_generic.mjs";
import { subtract } from "./subtract.mjs";
import { app_gs_screen_size } from "./app_gs_screen_size.mjs";
export function app_gs_menu_overlay(context) {
  let menu = app_gs_div_rounded_transparent(parent, "black", 25);
  let { x_count, y_count } = app_gs_screen_size();
  let position_y = subtract(context.game.player.y, (y_count - 1) / 2);
  let position_x = subtract(context.game.player.x, (x_count - 1) / 2);
  game_img_style_generic(
    menu,
    y_count,
    x_count,
    "menu",
    position_y,
    position_x,
  );
  html_style(menu, {
    "overflow-y": "scroll",
  });
  return menu;
}
