export function html_scroll_center_smooth(player_overlay) {
  let vh = window.innerHeight;
  let vw = window.innerWidth;
  let e = player_overlay.element;
  window.scrollTo({
    left: e.offsetLeft - vw / 2 + e.width / 2,
    top: e.offsetTop - vh / 2 + e.height / 2,
    behavior: "smooth",
  });
}
