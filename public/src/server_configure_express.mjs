import { url_localhost } from "./url_localhost.mjs";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
export function server_configure_express(app) {
  let url = url_localhost(8080);
  let options = {
    origin: [url],
  };
  app.use(cors(options));
  let limit = "50mb";
  app.use(
    express.json({
      limit: limit,
    }),
  );
  app.use(
    bodyParser.urlencoded({
      limit: limit,
      extended: true,
    }),
  );
  return url;
}
