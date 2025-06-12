import { string_prefix_and } from "./string_prefix_and.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { prayers_bbw } from "./prayers_bbw.mjs";
import { prayers_list_generic_5 } from "./prayers_list_generic_5.mjs";
export function prayers_church_leadership() {
  return [
    "May all church meetings inlcuding buildings be as You desire",
    "May all Lord’s Supper bread and drink be as You desire",
    prayers_list_generic_5(
      [
        "elder",
        "overseer",
        "bishop",
        "pastor",
        "teacher",
        "apostle",
        "prophet",
        "deacon",
        "servant",
        "messenger",
      ],
      function (w) {
        let v3 = prayers_bbw(string_combine_multiple(["every ", w]));
        return v3;
      },
      string_prefix_and,
    ),
    "May all shepherding, stewardship, preaching and teaching be perfect",
    "If possible, may all seminary and religious education be free and online",
  ];
}
