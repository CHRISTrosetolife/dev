import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { prayers_bbw } from "./prayers_bbw.mjs";
import { prayers_list_generic } from "./prayers_list_generic.mjs";
export function prayers_family() {
  let v = [
    "bless beyond words our marriage",
    "Save and bless beyond words our children and may they be obedient and healthy",
    "Bless any trips, our legal marriage, any marriage ceremonies, Visa and Green Card",
    "bless beyond words together in person",
    prayers_list_generic(
      [
        "the family of love",
        "Papa",
        "Mama",
        "sister",
        "brothers",
        "nephews",
        "nieces",
        "my family",
        "Dad",
        "Mom",
        "Grandaddy",
        "Grandma",
        "Nana",
        "Thom",
        "Micah",
        "Alexa",
        "Thea",
        "Hallie",
        "Brandon",
        "Eric",
        "Lori",
        "Naila",
        "Peter",
        "Naheed",
        "Alex",
        "Adam",
        "Alan",
        "Christian",
        "Emily",
        "Erica",
        "Shalini",
        "Jennifer",
        "Mandi",
        "Tom",
        "Lindsay",
        "Mike",
        "Sherry",
        "Joseph",
        "Metta",
        "Jakob",
        "Susie",
        "Michael",
        "Nancy",
        "Zachary",
      ],
      prayers_bbw,
      function (w) {
        let v2 = string_combine_multiple(["and ", w]);
        return v2;
      },
    ),
    "bless beyond words parenting of Micah and Alexa",
  ];
  return v;
}
