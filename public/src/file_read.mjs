import { global_get } from './global_get.mjs';
import {import_node} from './import_node.mjs';import { object_property_get } from './object_property_get.mjs';
import { web_is } from './web_is.mjs';
let fs = await import_node('fs');
export async function file_read(file_name) {
    if (web_is()) {
        let {files} = global_get()
        return object_property_get(files, file_name)
    }
    return await fs.promises.readFile(file_name, 'utf-8');
}
