import * as cheerio from "cheerio";
import { object_property_get } from "./object_property_get.mjs";
export function html_parse(input) {
  let parsed = cheerio.load(input);
  return object_property_get(parsed.root(), "0");
}
