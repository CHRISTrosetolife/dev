import { server_port } from "./server_port.mjs";
import { express_app } from "./express_app.mjs";
export function server_sandbox() {
  let app = express_app();
  app.get("/", async (req, res) => {
    res.end("get");
  });
  app.post("/", async (req, res) => {
    res.end("post");
  });
  let port = server_port();
  app.listen(port, () => {});
}
