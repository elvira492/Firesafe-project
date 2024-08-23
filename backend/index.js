/* 
npm init -y
npm i express mongoose cors bcryptjs dotenv jsonwebtoken nodemon
in package.json "type" : "module"
index.js это входной файл нашего сервера
*/
import express from "express"; //1
import mongoose from "mongoose"; //3
import dotenv from "dotenv"; //5
import cors from "cors";

//11 routes, gehen zu routes in backend und erstellen, hier die importieren
//12
import router from "./routes/review.js";

const app = express(); //2 создаем приложение express и запускаем через app.listen
dotenv.config(); //6

//7️ erstellen von Constanten
const PORT = process.env.PORT; //! || 3000 fürs Vercelpublishing
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

//8 middleware
app.use(cors());
app.use(express.json()); //-из frontend отсылаем данные в формате json

//13
// Review-Routen hinzufügen anbinden
app.use("/reviews", router);
//14 controllers - functions für routes erstellen
//15 in frontend für review - component alles vorbereiten. weiter in readme

//16 Error Handling Middleware - zentrale Fehlerbehandlung
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});
//17 testen Error in backend-routes-review.js. funktioniert!

//9 test, endpoint erstellt, jetzt testen mit thunderclient ->http://localhost:3001/, nach dem Ausprobieren kann man löschen
/* app.get("/", (req, res) => {
  return res.json({
    message: "all is fine",
  });
}); */

//4 function start
async function start() {
  try {
    await mongoose.connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.jyxqqtb.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`
    );
    app.listen(PORT, () => console.log(`server started on port:${PORT}`));
  } catch (error) {
    console.log(error);
  }
}
start();

//? optional: register/login/getme functionen erstellen
//* req-anfrage - то что мы получаем с фронтэнда на сервер, res-antwort то что отправляем в ответ на req
