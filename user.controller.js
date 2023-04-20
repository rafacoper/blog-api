import express from "express";
import sequelize, { Sequelize } from "./models";

const routes = express.Router();

routes.post("/user", async (req, res) => {
  const data = req.body
  console.log("🚀 ~ file: user.controller.js:8 ~ routes.post ~ data:", data)
  try {
    const userSaved = await Sequelize.Model.create({
      firstName: data.firstName, 
      lastName: data.lastName,
      cpf: data.cpf,
      phone: data.phone,
      email: data.email,
    })
    console.log("🚀 ~ file: user.controller.js:16 ~ routes.post ~ userSaved:", userSaved)
    res.status(200).send(userSaved);
  } catch (error) {
    res.status(400).send(error);
  }
});
