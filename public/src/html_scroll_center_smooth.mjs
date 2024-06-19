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
      reject();
    }, 2000);
    let scrollHandler = () => {
      if (window.scrollY === top && window.scrollX === left) {
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
