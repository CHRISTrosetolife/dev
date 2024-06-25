export async function html_load_wait(component) {
  let element = component;
  await new Promise(function (resolve) {
    window.addEventListener("load", function on_load() {
      window.removeEventListener(on_load);
      resolve();
    });
  });
}
