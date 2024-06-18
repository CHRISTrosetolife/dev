import { log } from "./log.mjs";
import { each_pairs } from "./each_pairs.mjs";
import { list_adder } from "./list_adder.mjs";
import { performance_next } from "./performance_next.mjs";
export function performance_log(p) {
  performance_next(p);
  let r = list_adder((la) => {
    each_pairs(p.times, (a, b) => {
      let d = b.time - a.time;
      la(d);
    });
  });
  log(r);
}
