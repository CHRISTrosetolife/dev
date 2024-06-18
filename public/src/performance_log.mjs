import { log } from "./log.mjs";
import { each_pairs } from "./each_pairs.mjs";
import { list_adder } from "./list_adder.mjs";
export function performance_log() {
  let r = list_adder((la) => {
    each_pairs(p.times, (a, b) => {
      let d = b - a;
      la(d);
    });
  });
  log(r);
}
