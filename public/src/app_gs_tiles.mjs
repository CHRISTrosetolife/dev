import { html_document_body } from "./html_document_body.mjs";
import { game_img_base } from "./game_img_base.mjs";
import { game_img } from "./game_img.mjs";
export function app_gs_tiles() {
  let root = html_document_body();
  game_img(
    root,
    game_img_base(0),
    {
      x: 0,
      y: 0,
    },
    "tile",
  );
}
