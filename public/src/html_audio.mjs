import { html_remove } from "./html_remove.mjs";
import { html_button_wait } from "./html_button_wait.mjs";
import { html_overlay } from "./html_overlay.mjs";
import { html_interacted } from "./html_interacted.mjs";
export async function html_audio(src) {
  if (!html_interacted()) {
    let overlay = html_overlay();
    await html_button_wait(overlay, "Press this button to enable audio");
    html_remove(overlay);
  }
  let a = new Audio(src);
  let result = new Promise((resolve) => {
    a.addEventListener("ended", function () {
      a.currentTime = 0;
      resolve();
    });
  });
  await a.play();
  return await result;
}
