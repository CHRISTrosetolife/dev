import { log } from "./log.mjs";
export function html_parse_href(i) {
  log({
    i,
  });
  return i.getAttribute("href");
}
