import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function html_element_wait(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }
    let observer = new MutationObserver((mutations) => {
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
}
