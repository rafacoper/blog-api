import express from "express";
import userController from "../controllers/userController";

const routes = express.Router();

routes.get("/users", userController.findUsers)
routes.post("/users", userController.createUser)
routes.put("/users/:id", userController.updateUser)
routes.delete("/users/:id", userController.deleteUser)

export { routes as userRoutes };