import { app_gs_npc_icon_update } from "./app_gs_npc_icon_update.mjs";
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
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function app_gs_map_cell(context, tile) {
  assert_arguments_length(arguments, 2);
  let clicker = html_div(context.map_c);
  let overlays = list_adder((la) =>
    each(tile.overlays, function lambda_overlay(o) {
      if (o.type === "base") {
        let { id: o_id } = o;
        html_data_set(clicker, "overlay", o_id);
        let overlay_c = game_img(
          context.map_c,
          game_img_base(o_id),
          tile,
          "overlay",
        );
        la(overlay_c);
      } else if (o.type === "npc") {
        let overlay_c = app_gs_character_c(context.map_c, o, "npc");
        la(overlay_c);
        html_data_set(overlay_c, "type", "npc");
        let c_blur = html_img_element(context.map_c);
        let c = html_img_element(context.map_c);
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
          html_data_set(item.component, "type", item.type);
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
        app_gs_npc_icon_update(context, o, c_blur, c);
      } else {
        error();
      }
    }),
  );
  let { id } = tile;
  let tile_c = game_img(context, game_img_base(id), tile, "tile");
  game_img_style(clicker, tile.y, tile.x, "clicker");
  html_on_click(clicker, async () => {
    await app_gs_map_cell_click(context, tile);
  });
  return list_concat([tile_c, clicker], overlays);
}
