const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000; // Вы можете выбрать любой свободный порт

// Позволяет обрабатывать данные в формате JSON
app.use(bodyParser.json());

// Обработчик POST-запроса для регистрации пользователя
app.post("/api/signup", (req, res) => {
  const userData = req.body;
  // Здесь вы можете добавить логику для сохранения данных в базе данных или другом хранилище
  console.log("Received User Registration Data:", userData);
  res.status(200).send("User registered successfully");
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
