import * as cheerio from "cheerio";
export function html_parse(input) {
  let parsed = cheerio.load(input);
  return parsed.root();
}
