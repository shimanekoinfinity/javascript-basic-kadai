const express = require("express");
const swaggerUi = require("swagger-ui-express");

const swaggerSpec = require("./swagger");
const userRoutes = require("./routes/userRoutes");

const app = express;

app.use(express.json());

app.use("./users", userRoutes);

app.use("/api-docs",
  swaggerUi.serve,
  swaggerUi.setup,
);

app.listen(3000, () =>{
  console.log("Server running");
});