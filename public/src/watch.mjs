import { error } from "./error.mjs";
import { log } from "./log.mjs";
import chokidar from "chokidar";
export function watch() {
    chokidar.watch('.').on('all', (event, path) => {
        console.log(event, path);
      });
}
