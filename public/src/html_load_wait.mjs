export async function html_load_wait() {
  await new Promise(function (resolve) {
    window.addEventListener("load", function on_load() {
      resolve();
    });
  });
}
