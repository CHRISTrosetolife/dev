import { prayers_sabbw } from "./prayers_sabbw.mjs";
import { list_map } from "./list_map.mjs";
export function prayers_famous() {
  let v = [
    "the president",
    "[the Pope and] any future Popes",
    "the Ecumenical Patriarch",
    "Elon and let him be generous",
    "Zuckerberg and let him be generous",
    "Bezos and let him be generous",
    "Altman and let him be generous",
    "Gates and let him be generous",
    "Rowling and let her be generous",
    "Putin and let him be generous",
    "Larry Page and let him be generous",
    "Warren Buffet and let him be generous",
    "Taylor Swift and let her be generous",
    "Kanye and let him be generous",
    "MrBeast and let him be generous",
    "Bieber, let him be generous and thank you for his Christian faith",
    "Shaquille O'Neal, let him be generous and thank You for his generosity",
    "Michael Jordan and let him be generous",
    "Katy Perry and let her be generous",
  ];
  let v2 = list_map(v, function (e) {
    let v3 = prayers_sabbw(e);
    return v3;
  });
  return v2;
}
