import { game_tile_units_css } from "./game_tile_units_css.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_style_filter } from "./html_style_filter.mjs";
import { app_gs_npc_icon_wait } from "./app_gs_npc_icon_wait.mjs";
import { app_gs_npc_icon_christian } from "./app_gs_npc_icon_christian.mjs";
import { app_gs_npc_icon_unmet } from "./app_gs_npc_icon_unmet.mjs";
import { html_img_element } from "./html_img_element.mjs";
import { game_img_style_generic } from "./game_img_style_generic.mjs";
import { app_gs_character_c } from "./app_gs_character_c.mjs";
import { error } from "./error.mjs";
import { app_gs_map_cell_click } from "./app_gs_map_cell_click.mjs";
import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { game_img_style } from "./game_img_style.mjs";
import { game_img_base } from "./game_img_base.mjs";
import { game_img } from "./game_img.mjs";
import { html_data_set } from "./html_data_set.mjs";
import { html_div } from "./html_div.mjs";
import { list_concat } from "./list_concat.mjs";
export function app_gs_map_cell(map, map_c, player_c, tile) {
  let clicker = html_div(map_c);
  let overlays = list_adder((la) =>
    each(tile.overlays, function lambda_overlay(o) {
      list_adder((la) => {
        if (o.type === "base") {
          let { id: o_id } = o;
          html_data_set(clicker, "overlay", o_id);
          let overlay_c = game_img(map_c, game_img_base(o_id), tile, "overlay");
          la(overlay_c);
        } else if (o.type === "npc") {
          let overlay_c = app_gs_character_c(map_c, o.character, o);
          la(overlay_c);
          html_data_set(overlay_c, "type", "npc");
          let c_blur = html_img_element(map_c);
          html_style_filter(
            c_blur,
            string_combine_multiple([
              "invert(100%) sepia(100%) saturate(1%) hue-rotate(144deg) brightness(102%) contrast(101%) blur(",
              game_tile_units_css(0.25),
              ")",
            ]),
          );
          html_data_set(c, "type", "npc_overlay_blur");
          let c = html_img_element(map_c);
          let list = [
            {
              component: c_blur,
              type: "npc_overlay_blur",
            },
            {
              component: c,
              type: "npc_overlay",
            },
          ];
          each(list, (item) => {
            la(item.component);
            html_data_set(c, "type", item.type);
            let size = 1 / 3;
            game_img_style_generic(
              item.component,
              size,
              size,
              item.type,
              tile.y,
              tile.x + 1 - size,
            );
          });
          if (o.conversation_count === 0) {
            app_gs_npc_icon_unmet(c_blur, c);
            app_gs_npc_icon_christian(c_blur, c);
            app_gs_npc_icon_wait(c_blur, c);
          }
        } else {
          error();
        }
      });
    }),
  );
  let { id } = tile;
  let tile_c = game_img(map_c, game_img_base(id), tile, "tile");
  game_img_style(clicker, tile.y, tile.x, "clicker");
  html_on_click(clicker, async () => {
    await app_gs_map_cell_click(map, map_c, player_c, tile);
  });
  return list_concat([tile_c, clicker], overlays);
}
