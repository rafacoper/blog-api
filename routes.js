import express from "express";

const routes = express.Router();

routes.get("/", (_req, _res) => {
  return res.json({ name: "Ciclano Fulano" });
});

export { routes as default };