import { game_img_style_generic } from "./game_img_style_generic.mjs";
import { app_gs_character_c_generic } from "./app_gs_character_c_generic.mjs";
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
      let overlay_c;
      if (o.type === "base") {
        let { id: o_id } = o;
        html_data_set(clicker, "overlay", o_id);
        overlay_c = game_img(map_c, game_img_base(o_id), tile, "overlay");
      } else if (o.type === "npc") {
        overlay_c = app_gs_character_c(map_c, o.character, o);
        html_data_set(overlay_c, "type", "npc");
        let c = app_gs_character_c_generic(
          map_c,
          "icons/question.svg",
          tile,
          "player_overlay",
        );
        game_img_style_generic(c, 1, 1, "player_overlay", y, x);
      } else {
        error();
      }
      la(overlay_c);
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
