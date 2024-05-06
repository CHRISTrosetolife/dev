import {import_node} from './import_node.mjs';let path = await import_node('path');
export function path_join(paths) {
    return path.join(...paths);
}
