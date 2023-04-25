const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require("./src/routes")(app)

const PORT = 3963
app.listen(PORT, () => console.log(`Server listening to port ${PORT}`));
