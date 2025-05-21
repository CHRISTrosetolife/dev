import { prayers_sabbw } from "./prayers_sabbw.mjs";
import { list_map } from "./list_map.mjs";
export function prayers_famous() {
  let v = [
    "the president",
    "[the Pope and] any future Popes",
    "the Ecumenical Patriarch",
    "Elon be Christian and generous",
    "Zuckerberg be Christian and generous",
    "Bezos be Christian and generous",
    "Altman be Christian and generous",
    "Gates be Christian and generous",
    "Rowling be Christian and generous",
    "Putin be Christian and generous",
    "Larry Page be Christian and generous",
    "Warren Buffet be Christian and generous",
    "Taylor Swift be Christian and generous",
    "Kanye be Christian and generous",
    "MrBeast be Christian and generous",
    "Bieber be Christian and generous and thank you for his Christian faith",
    "Shaquille O'Neal be Christian and generous and thank You for his generosity",
    "Michael Jordan be Christian and generous",
  ];
  let v2 = list_map(v, function (e) {
    let v3 = prayers_sabbw(e);
    return v3;
  });
  return v2;
}
