import { each_index } from "./each_index.mjs";
import { list_adder } from "./list_adder.mjs";
export function arc_coordinates(io, color) {
  return list_adder((la) => {
    each_index(io, (row, y) => {
      each_index(row, (c, x) => {
        if (c === color) {
          la({
            y,
            x,
          });
        }
      });
    });
  });
}
