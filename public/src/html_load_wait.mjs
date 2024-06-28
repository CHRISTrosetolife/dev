export async function html_load_wait(component) {
  let { element } = component;
  await new Promise(function (resolve) {
    element.addEventListener("load", function on_load() {
      let name = "load";
      element.removeEventListener(name, on_load);
      resolve();
    });
  });
}
