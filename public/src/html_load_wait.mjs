export async function html_load_wait(component) {
  let { element } = component;
  await new Promise(function (resolve) {
    let type = "load";
    element.addEventListener(type, function on_load() {
      element.removeEventListener(type, on_load);
      resolve();
    });
  });
}
