Projekt Fire Safe wurde für eine Firma entwickelt, die Feuerlöscher verkauft.

Dieses System verwendet React für das Frontend, Node.js mit Express für das Backend und MongoDB als Datenbank, um ein vollständiges CRUD (Create, Read, Update, Delete)-System zu realisieren.

**Technologien**
Frontend: React
Backend: Node.js, Express
Datenbank: MongoDB

**Struktur**
React: React-Pages, Komponenten
React Router: Für die Navigation
Fetch: Für die HTTP-Anfragen zum Backend

Express: Framework für die Entwicklung des API-Servers
Mongoose: ODM-Bibliothek für die Interaktion mit MongoDB
CRUD-Endpunkte: Endpunkte für das Erstellen, Lesen, Aktualisieren und Löschen von Bewertungen

Datenbank
Die Datenbank wurde mit MongoDB realisiert. Hier werden die Bewertungen gespeichert.

1. Eine Bewertung erstellen
2. Ändern
3. Löschen
4. Gesamtliste zeigen

**VERCEL**

Du solltest die Vercel CLI global installieren und nicht als Abhängigkeit in deinem Projekt. Die Vercel CLI wird verwendet, um dein Projekt zu deployen und zu verwalten, und es ist nicht notwendig, dass sie als Teil der Projekt-Abhängigkeiten installiert wird. Stattdessen installiere sie global auf deinem Rechner.

Hier ist, wie du das machst:

1. **Global Installation der Vercel CLI:**

   ```bash
   npm install -g vercel
   ```

2. **Projekt-Setup:**

   - Gehe in dein Projektverzeichnis (der Ordner, der sowohl das Frontend als auch das Backend enthält).
   - Initialisiere Vercel, wenn du dies noch nicht getan hast:

     ```bash
     vercel
     ```

     Folge den Anweisungen, um dein Projekt mit Vercel zu verknüpfen.

3. **Umgebungsvariablen auf Vercel einrichten:**

   - Navigiere zu deinem Projekt auf der Vercel-Weboberfläche.
   - Gehe zu "Settings" -> "Environment Variables".
   - Füge alle Umgebungsvariablen hinzu, die du in deiner `.env`-Datei hast.

4. **Vercel-Konfigurationsdatei (`vercel.json`) erstellen:**

   - Erstelle im Hauptverzeichnis deines Projekts eine `vercel.json`-Datei. Hier ist ein Beispiel:

     ```json
     {
       "version": 2,
       "builds": [
         {
           "src": "api/*.js",
           "use": "@vercel/node"
         },
         {
           "src": "src/**/*",
           "use": "@vercel/static-build",
           "config": { "distDir": "build" }
         }
       ],
       "routes": [
         { "src": "/api/(.*)", "dest": "/api/index.js" },
         { "src": "/(.*)", "dest": "/src/$1" }
       ]
     }
     ```

     Stelle sicher, dass deine `api/index.js` der Einstiegspunkt für deinen Express-Server ist.

5. **Frontend-Build-Skript konfigurieren:**

   - In deinem `package.json` im Frontend-Verzeichnis, stelle sicher, dass das Build-Skript für React korrekt konfiguriert ist:

     ```json
     "scripts": {
       "build": "react-scripts build",
       ...
     }
     ```

6. **Deployment:**

   - Starte das Deployment aus dem Hauptverzeichnis deines Projekts:

     ```bash
     vercel --prod
     ```

### Beispiel-Backend (`api/index.js`)

Hier ist ein Beispiel für den Inhalt der `api/index.js`, der deinen Express-Server definiert:

```javascript
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;

// MongoDB-Verbindung
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(express.json());

// Beispiel-Routen
app.get("/api/test", (req, res) => {
  res.send("API is working!");
});

// Server starten
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
```

### Zusammenfassung

- Installiere die Vercel CLI global.
- Initialisiere Vercel in deinem Projektverzeichnis.
- Konfiguriere deine Umgebungsvariablen auf Vercel.
- Erstelle eine `vercel.json`-Datei im Hauptverzeichnis.
- Sorge dafür, dass dein Frontend-Build-Skript korrekt konfiguriert ist.
- Deploye dein Projekt mit `vercel --prod`.

Mit diesen Schritten solltest du in der Lage sein, dein Fullstack-Projekt erfolgreich auf Vercel zu deployen.
