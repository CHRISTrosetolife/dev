import {global_get} from "./global_get.mjs";
import {web_is} from "./web_is.mjs";
import {import_node} from './import_node.mjs';
import {object_property_set} from './object_property_set.mjs';
import { file_read } from "./file_read.mjs";
import { equal_not } from "./equal_not.mjs";
import { file_exists } from "./file_exists.mjs";
let fs = await import_node('fs');
export async function file_overwrite(file_name, data) {
    if (web_is()) {
        let {files} = global_get();
        object_property_set(files, file_name, data);
    } else {
        if (await file_exists(file_name)) {
            let existing = await file_read(file_name);
            if (equal_not(data, existing)) {
                return;
            }
        }
        return await fs.promises.writeFile(file_name, data, 'utf-8');
    }
}
