import { log } from "./log.mjs";
import { html_scroll_center_generic } from "./html_scroll_center_generic.mjs";
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
      log("scroll finish failed");
      reject();
    }, 2000);
    window.addEventListener("scrollend", () => {
      clearTimeout(failed);
      window.removeEventListener("scrollend", scrollHandler);
      resolve();
    });
  });
  return;
  let additional = {
    behavior: "smooth",
  };
  html_scroll_center_generic(component, additional);
  return;
}
