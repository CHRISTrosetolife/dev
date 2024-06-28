import { html_on_remove } from "./html_on_remove.mjs";
export async function html_load_wait(component) {
  await new Promise(function (resolve) {
    let type = "load";
    let { element } = component;
    element.addEventListener(type, function on_load() {
      html_on_remove(component, type, on_load);
      resolve();
    });
  });
}
