import { list_join } from "./list_join.mjs";

export function path_join(paths) {
    return list_join(paths, '/')
}
