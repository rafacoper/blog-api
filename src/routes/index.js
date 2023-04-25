const userController = require("../controllers/userController");

module.exports = app => {
  app.get("/", (_req, res) => {
    res.status(200).send({
      data: "This is Node Sequelize API"
    })
  })
  
  app.get("/users", userController.findUsers)

  app.get("/users", userController.createUser)

  app.put("/users/:id", userController.updateUser)

  app.delete("/users/:id", userController.deleteUser)
}
