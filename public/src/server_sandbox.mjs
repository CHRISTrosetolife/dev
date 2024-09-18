import { express_app } from "./express_app.mjs";
export function server_sandbox() {
  let app = express_app();
  app.get("/", async (req, res) => {
    res.end("get");
  });
  app.post("/", async (req, res) => {
    res.end("post");
  });
  let port = 8000;
  app.listen(port, () => {});
}
