import {global_get} from "./global_get.mjs";
import {web_is} from './web_is.mjs';
import {import_node} from './import_node.mjs';
let fs = await import_node('fs');
export function file_exists(file_name) {
    if (web_is()) {
        let {files} = global_get();
    }
    return new Promise((resolve, reject) => {
        fs.stat(file_name, function (err, stat) {
            if (err == null) {
                resolve(true);
            } else if (err.code === 'ENOENT') {
                resolve(false);
            } else {
                reject(err);
            }
        });
    });
}
