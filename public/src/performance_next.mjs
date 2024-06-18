import { list_add } from "./list_add.mjs";
export function performance_next(p) {
  list_add(p.times, {
    time: new Date(),
  });
}
