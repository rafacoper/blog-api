const model = require('../models')


router.post("/user", async (req, res) => {
  const data = req.body
  try {
    const userSaved = await model.sequelize.models.User.create({
      firstName: data.firstName, 
      lastName: data.lastName,
      cpf: data.cpf,
      phone: data.phone,
      email: data.email,
    })
    res.status(200).send(userSaved);
  } catch (error) {
    res.status(400).send(error);
  }
});
