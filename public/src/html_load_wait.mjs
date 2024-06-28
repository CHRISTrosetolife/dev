export async function html_load_wait(component) {
  let { element } = component;
  await new Promise(function (resolve) {
    let name = "load";
    element.addEventListener(name, function on_load() {
      element.removeEventListener(name, on_load);
      resolve();
    });
  });
}
