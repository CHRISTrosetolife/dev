import { html_button } from "./html_button.mjs";
export async function html_button_wait(overlay, text) {
  await new Promise((resolve) => {
    let b = html_button(overlay, text, () => {
      resolve(b);
    });
  });
}
