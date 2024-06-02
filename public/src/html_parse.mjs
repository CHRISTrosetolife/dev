import { parse } from "node-html-parser";
import cheerio from "cheerio";
export function html_parse(input) {
  return parse(input);
}
