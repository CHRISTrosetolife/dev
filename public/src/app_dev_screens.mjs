import {app_dev_screen_command_line} from "./app_dev_screen_command_line.mjs";
import {app_dev_screen_overview} from "./app_dev_screen_overview.mjs";
import {list_add} from "./list_add.mjs";
import {marker} from "./marker.mjs";
export function app_dev_screens() {
    let result = [];
    list_add(result, app_dev_screen_overview);
    list_add(result, app_dev_screen_command_line);
    marker();
    return result;
}
