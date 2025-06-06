import { prayers_sabbw } from "./prayers_sabbw.mjs";
import { list_map } from "./list_map.mjs";
export function prayers_famous() {
  let v = [
    "the president and any future presidents, [the Pope and] any future Popes, and the Ecumenical Patriarch and any future Ecumenical Patriarchs",
    "Elon, Zuckerberg, Bezos, Altman, and Gates and let them be generous",
    "Rowling, Putin, Larry Page, Warren Buffet, Taylor Swift and Kanye and let them be generous",
    "MrBeast, Michael Jordan, Katy Perry, Joe Rogan and JD Vance and let them be generous",
    "Shaquille O'Neal, let him be generous and thank You for his generosity",
    "Bieber and let him be generous and thank you for his Christian faith",
  ];
  let v2 = list_map(v, function (e) {
    let v3 = prayers_sabbw(e);
    return v3;
  });
  return v2;
}
