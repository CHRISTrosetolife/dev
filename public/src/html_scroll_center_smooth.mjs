import { html_document_body } from "./html_document_body.mjs";
import { log } from "./log.mjs";
import { html_scroll_center_generic } from "./html_scroll_center_generic.mjs";
import { object_properties_new } from "./object_properties_new.mjs";
import { abs } from "./abs.mjs";
export async function html_scroll_center_smooth(component) {
  let vh = window.innerHeight;
  let vw = window.innerWidth;
  let e = component.element;
  let left = e.offsetLeft - vw / 2 + e.width / 2;
  let top = e.offsetTop - vh / 2 + e.height / 2;
  window.scrollTo({
    left: left,
    top: top,
    behavior: "smooth",
  });
  return await new Promise((resolve, reject) => {
    let failed = setTimeout(() => {
      log(object_properties_new(window, ["scrollX", "scrollY"]));
      reject();
    }, 2000);
    let scrollHandler = () => {
      let root = html_document_body();
      if (abs(root.scrollTop - top) < 1 && abs(root.scrollLeft - left) < 1) {
        window.removeEventListener("scroll", scrollHandler);
        clearTimeout(failed);
        resolve();
      }
    };
    window.addEventListener("scroll", scrollHandler);
    scrollHandler();
  });
  return;
  let additional = {
    behavior: "smooth",
  };
  html_scroll_center_generic(component, additional);
  return;
}
