import { log } from "./log.mjs";
import { express_app } from "./express_app.mjs";
export function server_sandbox() {
  let app = express_app();
  app.get("/", async (req, res) => {
    log("here");
  });
  let port = 8001;
  app.listen(port, () => {});
}
