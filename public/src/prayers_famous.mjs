import { prayers_sabbw } from "./prayers_sabbw.mjs";
import { list_map } from "./list_map.mjs";
export function prayers_famous() {
  let v = [
    "Save and Bless the president",
    "Save and Bless [the Pope and] any future Popes",
    "Save and Bless the Ecumenical Patriarch",
    "Let Elon be Christian and generous",
    "Let Zuckerberg be Christian and generous",
    "Let Bezos be Christian and generous",
    "Let Altman be Christian and generous",
    "Let Gates be Christian and generous",
    "Let Rowling be Christian and generous",
    "Let Putin be Christian and generous",
    "Let Larry Page be Christian and generous",
    "Let Warren Buffet be Christian and generous",
    "Let Taylor Swift be Christian and generous",
    "Let Kanye be Christian and generous",
    "Let MrBeast be Christian and generous",
    "Let Bieber be Christian and generous and thank you for his Christian faith",
    "Let Shaquille O'Neal be Christian and generous and thank You for his generosity",
    "Let Michael Jordan be Christian and generous",
  ];
  let v2 = list_map(v, function (e) {
    let v3 = prayers_sabbw(e);
    return v3;
  });
  return v2;
}
