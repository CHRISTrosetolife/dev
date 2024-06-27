import { html_remove } from "./html_remove.mjs";
import { app_gs_overlay_speech_text } from "./app_gs_overlay_speech_text.mjs";
import { error } from "./error.mjs";
import { app_memorize_frame } from "./app_memorize_frame.mjs";
import { html_clear } from "./html_clear.mjs";
import { list_size } from "./list_size.mjs";
export async function app_gs_menu_study_bible(menu_overlay) {
  html_clear(menu_overlay);
  await app_memorize_frame({
    settings: false,
    root: menu_overlay,
    style: {
      text: {
        color: "white",
      },
      spacer2: {
        color: "lightgreen",
        "background-color": "lightgreen",
      },
      error: {
        color: "salmon",
      },
    },
    group_next: (a) => {
      let { tokens } = a;
      let { player } = context.game;
      let { energy } = player;
      let gain = list_size(tokens);
      energy.conversation += gain;
      html_clear(menu_overlay);
      app_gs_overlay_speech_text("You gained");
      html_remove(menu_overlay);
    },
    short: true,
  });
}
