import { html_on } from "./html_on.mjs";
import { html_on_remove } from "./html_on_remove.mjs";
export async function html_load_wait(component) {
  await new Promise(function (resolve) {
    let type = "load";
    let { element } = component;
    html_on(component, type, function on_load() {
      html_on_remove(component, type, on_load);
      resolve();
    });
  });
}
