import { each_map } from "./each_map.mjs";
export function each_map_value(selected, each_lambda) {
  each_map(selected, (component2, value) => {
    each_lambda(value);
  });
}
