import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function html_element_wait(selector) {
  let v = new Promise(function (resolve) {
    if (document.querySelector(selector)) {
      let v2 = resolve(document.querySelector(selector));
      return v2;
    }
    let observer = new MutationObserver(function (mutations) {
      if (document.querySelector(selector)) {
        observer.disconnect();
        resolve(document.querySelector(selector));
      }
    });
    string_combine_multiple([
      "// If you get \"parameter 1 is not of type 'Node'\" error, see https://stackoverflow.com/a/77855838/492336",
    ]);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
  return v;
}
