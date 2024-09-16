import { list_sort_string } from "./list_sort_string.mjs";
import { string_replace } from "./string_replace.mjs";
import { bible_eng_versions_new } from "./bible_eng_versions_new.mjs";
import { list_concat } from "./list_concat.mjs";
export function bible_eng_versions() {
  let a = [
    "engbsb",
    "engBBE",
    "eng-asv",
    "engasvbt",
    "engDRA",
    "engfbv",
    "engnoy",
    "eng-glw",
    "englsv",
    "eng-kjv2006",
    "eng-kjv",
    "engourb",
    "engoebus",
    "eng-rv",
    "engoke",
    "engtcent",
    "eng-t4t",
    "engULB",
    "eng-web",
    "engwmb",
    "engylt",
  ];
  let b = bible_eng_versions_new();
  let c = list_concat(a, b);
  list_sort_string(c, (s) => string_replace(s, "-", ""));
  return c;
}
