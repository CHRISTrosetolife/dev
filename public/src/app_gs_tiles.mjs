import { floor } from "./floor.mjs";
import { each_range } from "./each_range.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { game_img_base } from "./game_img_base.mjs";
import { game_img } from "./game_img.mjs";
export function app_gs_tiles() {
  let root = html_document_body();
  let columns = 8;
  each_range(1000, (i) => {
    game_img(
      root,
      game_img_base(0),
      {
        x: 0,
        y: floor(i / columns),
      },
      "tile",
    );
  });
}
