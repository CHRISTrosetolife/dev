import { list_filter } from "./list_filter.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { each_index } from "./each_index.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_includes } from "./list_includes.mjs";
export function graph_path_shortest(vertices, edge_lambda, from, to) {
  assert_arguments_length(arguments, 4);
  let edges = list_adder((la) =>
    each_index(vertices, (a, ai) =>
      each_index(vertices, (b, bi) => {
        if (bi <= ai) {
          return;
        }
        if (edge_lambda(a, b)) {
          la([a, b]);
        }
      }),
    ),
  );
  let current = from;
  let visited = [];
  list_filter(edges, (e) => list_includes(e, current));
}
