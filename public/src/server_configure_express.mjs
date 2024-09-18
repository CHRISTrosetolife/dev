import { log } from "./log.mjs";
import { url_localhost } from "./url_localhost.mjs";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
export function server_configure_express(app) {
  let url = url_localhost(8080);
  let options = {
    origin: [url],
  };
  log({
    url,
  });
  app.use(
    cors({
      origin: true,
      credentials: true,
    }),
  );
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
