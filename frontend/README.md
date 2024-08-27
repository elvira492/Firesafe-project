FIRE SAFE
neue Version
jetzt ist es gepublisht
bei den neuen Features:
vercel --prod (in Frontend/in Backend)
sonst https://firesafe.vercel.app/
backend hier https://backend-firesafe.vercel.app/

alte Version Jeden Tag
1.ip Adresse genehmigen hier :https://cloud.mongodb.com/v2/669523719d5ec21350349705#/clusters
2.den Atlas connecten
3.npm run dev aus dem backend terminal
4.npm run dev aus dem frontend terminal

**Ablauf**

### Backend (Node.js mit Express und MongoDB)

1. **Server starten und Datenbankverbindung herstellen:**

   - Im Backend wird der Node.js-Server gestartet, normalerweise über den Befehl `node backend/index.js` oder ähnlich, je nachdem wie deine Verzeichnisstruktur aussieht.
   - Der Server hört auf einem bestimmten Port (z.B. 3001) auf eingehende Anfragen.
   - Über `mongoose` wird eine Verbindung zur MongoDB hergestellt, indem du eine Verbindungs-URL verwendest, die du in der `mongoose.connect` Methode angegeben hast.

2. **API-Routen definieren:**

   - Du definierst API-Routen mit Express, z.B. `/reviews` für das Erstellen, Lesen, Aktualisieren und Löschen von Reviews.
   - Diese Routen verwenden Controller-Funktionen, um die Geschäftslogik zu implementieren (z.B. `createReview`, `getReviews`, `updateReview`, `deleteReview`).

3. **Datenbankmodelle (Schemas) definieren:**

   - Mit `mongoose` definierst du Datenbankmodelle (Schemas), die spezifizieren, wie Daten in der MongoDB gespeichert werden sollen. Zum Beispiel `Review`, das `name`, `text` und `rating` enthält.

4. **Middleware einrichten:**
   - Du setzt Middleware ein, z.B. `cors` für Cross-Origin-Ressource-Sharing und `express.json()` zum Parsen von JSON-Daten aus den Frontend-Anfragen.

### Frontend (React)

1. **Fetch-API nutzen:**

   - Im Frontend verwendest du die `fetch` API, um HTTP-Anfragen an deine Backend-API zu senden. Dies erfolgt in der Regel in Service-Dateien wie `api.js`.

2. **Komponenten erstellen:**

   - Du erstellst React-Komponenten für die verschiedenen Seiten und Funktionen deiner Anwendung, z.B. `ReviewList`, `CreateReview`, `UpdateReview`.

3. **Routing einrichten:**

   - Du konfigurierst das Routing mit `react-router-dom`, um zwischen verschiedenen Seiten der Anwendung zu navigieren.

4. **State-Management:**
   - Du verwendest React Hooks wie `useState` und `useEffect` für die Verwaltung des lokalen Zustands in den Komponenten.
   - Die State-Updates erfolgen normalerweise nach dem Empfang der Daten vom Backend über `fetch`.

### Verbindung zwischen Backend und Frontend

1. **API-Anfragen senden und empfangen:**

   - Im Frontend rufst du die entsprechenden API-Funktionen (z.B. `getReviews`, `createReview`, `updateReview`, `deleteReview`) auf, um Daten vom Backend zu erhalten, zu senden und zu aktualisieren.
   - Diese API-Anfragen erfolgen typischerweise durch Benutzeraktionen wie Klicken auf einen Button oder Laden einer Seite.

2. **Datenfluss:**

   - Daten werden vom Backend an das Frontend übertragen und können dann in den React-Komponenten angezeigt oder bearbeitet werden.
   - State-Updates in den Komponenten sorgen dafür, dass die Benutzeroberfläche aktualisiert wird, um die neuesten Daten anzuzeigen.

3. **Asynchrone Kommunikation:**
   - Da API-Anfragen asynchron sind, sollten geeignete Mechanismen (z.B. `async/await` oder Promises) verwendet werden, um sicherzustellen, dass die Anfragen korrekt verarbeitet werden und die Benutzeroberfläche reaktiv bleibt.

### Zusammenfassung

Die Verbindung zwischen Backend und Frontend funktioniert durch den Austausch von HTTP-Anfragen und -Antworten über definierte API-Routen. Das Backend verwaltet die Datenbankzugriffe und Geschäftslogik, während das Frontend die Benutzeroberfläche verwaltet und die Benutzerinteraktionen ermöglicht. Durch den Einsatz von `fetch` im Frontend und Express im Backend kannst du eine vollständige Fullstack-Anwendung erstellen, die reibungslos zusammenarbeitet. Stelle sicher, dass die URLs und Pfade in beiden Teilen der Anwendung richtig konfiguriert sind, damit die Kommunikation zwischen ihnen erfolgreich ist.

**Meine Notizen**

1. wenn backend teil fertig ist(index.js in backend schritt 15)und läuft - kann man das mit frontend verbinden
   backend struktur/
   │
   ├── controllers/
   │ └── review.js
   │
   ├── models/
   │ └── Review.js
   │
   ├── routes/
   │ └── review.js
   │
   ├── .env
   ├── index.js
   ├── package.json
   └── package-lock.json
2. index.js (Backend-Einstiegspunkt) ist auch fertig
3. dann wird frontend erstellt: pages, components, styles, utils
   frontend struktur/
   ├── public/
   │ └── images
   ├── src/
   │ ├── components/
   │ │ ├── ReviewList.jsx
   │ │ ├── ReviewForm.jsx
   │ │ └── ...
   │ ├── pages/
   │ │ ├── Home.jsx
   │ │ ├── About.jsx
   │ │ └── ...
   │ ├── styles/
   │ │ ├── App.css
   │ │ ├── index.css
   │ │ └── ...
   │ ├── utils/
   │ │ └── Router.jsx
   | | └── api.jsx
   │ ├── App.jsx
   │ ├── index.js
   │ └── ...
   ├── node_modules/
   ├── package.json
   └── ...
4. api.jsx erstellen um Daten zu fetchen
   neue Komponente für backend in frontend erstellen:
   CreateReview.js
   ReviewList.js
   UpdateReview.js

5. in utils - Router.jsx die neuen Components erwähnen

6. https://tailwindcss.com/docs/installation
   npm install tailwindcss@latest (für UI components frontend)
   npm install @headlessui/react @heroicons/react (react icons)
7. https://www.jsdelivr.com/package/npm/hamburger-react
   burger button

   https://www.jsdelivr.com/ - api für alle npm

**Mein Anfang**

1. als erstes npm react-router-dom,dann erstellen wir Navigation Komponent, danach importieren es im Header.
2. Router erstellen(utils) und in main.jsx importieren
   für backend:
3. npm init -y node.js starten
4. npm install express mongoose dotenv express-validator bcryptjs jsonwebtoken
   mongoDB und mongoose einrichten:
5. .env datei erstellen im backend Ordner. Um sensible Informationen zu speichern. Diese Datei sollte nicht ins Versionskontrollsystem (z.B. Git) eingecheckt werden
6. Schema für Benutzer erstellen im backend/models Verzeichnis

---

**das ist index.js in backend zu dem Zeitpunkt mit einer message die in frontend im browser angezeigt wird!**

```javascript
/_ 1. erstellen backend ordner ->
im oberem ordner(wo backend und frontend liegen- FULLSTACK) npm init -y ->
npm i express cors installieren, express для backend, cors чтобы мы могли отправлять запросы с разных ip адресов ->
in backend ordner erstellen - index.js _/

import cors from "cors"; //1.1 a-für cors. das ist import vom cors
import express from "express"; //1.2

const PORT = process.env.PORT || 3001; //1.3

const app = express(); //1.4
app.use(express.json()); //1.5 b
app.use(cors()); //1.6 c

app.listen(PORT, () => {
console.log(`Server starting on ${PORT}`);
}); //1.7

app.get("/api", (req, res) => {
res.json({
message: "hello from backend express.js. das wird im Browser angezeigt(im Frontend)",
});
}); //1.8
/_ 2. bei package.json in FULLSTACK ordner:
scripts:
"start": "node backend/index.js" -Zeile hinzufügen oder "dev": "node backend/index.js"
!damit man bei jeder Änderung in backend server nicht neu laden muss- kann man anstatt node-> nodemon backend/index.js nutzen, dann wird es automatisch reloaded bei jeder Änderung
_/

/\* 3. dann frontend ordner erstellen und da drinne npm create vite@latest
3.1 in vite.config.js hinzufügen: server: {
port: 3000, // Ändere die Portnummer hier nach Bedarf -hier wird Frontend server laufen
},

in FULLSTACK npm i cors
und in index.js in backend
1.const cors = require("cors");
2.app.use(express.json()); 3. app.use(cors());

4. aus dem backend npm start oder dev(kommt darauf an, was man in package.json in scripts hat )
   und aus dem frontend npm run dev

5.in FULLSTACK npm i mongoose(для связи с базой данных) bcryptjs(для шифрования пароля) dotenv(для переменных dotenv) jsonwebtoken(для регистрации, для получения tokena)
npm i nodemon чтобы сервер сам обновлялся при малейшем изменении backenda
in package.json nach main.. : "type": "module", dann können wir anstatt require -(const cors = require("cors");) - import nutzen

6. теперь нам нужно к этому серверу(index.js) подключить базу данных mongoDB\*/

**das ist App.jsx dafür, dass aus dem backend eine message angezeigt wird**
```

```javascript
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";

import { useState, useEffect } from "react";

function App() {
  //hier backend
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/")
      .then((response) => response.json())
      .then((response) => setData(response.message));
  }, []); //bis hier

  return (
    <>
      <Header />
      <Outlet />
      <p>{!data ? "Loading..." : data}</p> /* hier etwas aus dem backend zeigen,
      вывести данные */
    </>
  );
}
export default App;
```
