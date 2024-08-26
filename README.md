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

Um ein Full-Stack-React-Projekt (mit einem Frontend und einem Node.js/Express-Backend) auf Vercel zu veröffentlichen und sicherzustellen, dass sowohl das Frontend als auch das Backend online und funktionsfähig sind:

### 1. **Backend zu Vercel hochladen**

Vercel ist hauptsächlich für Frontend-Projekte (wie Next.js) konzipiert, aber man kann ein einfaches Node.js-Backend darauf hosten. Für umfangreichere Backends oder spezielle Anforderungen solltest du eventuell eine dedizierte Plattform wie Heroku, AWS, oder DigitalOcean für das Backend in Betracht ziehen.

Dein `index.js`-Datei sieht gut aus und enthält die wesentlichen Bestandteile für den Betrieb eines Node.js/Express-Backends mit MongoDB und weiteren Middleware-Komponenten. Um sicherzustellen, dass dein Backend korrekt auf Vercel läuft, gibt es einige kleine Anpassungen und Tipps, die dir helfen könnten.

### Anpassungen für Vercel

1. **Port-Konfiguration:**

   - Der Port in deinem Code ist korrekt konfiguriert, indem du `process.env.PORT` verwendest. Falls du lokal entwickelst und `PORT` nicht gesetzt ist, könntest du einen Fallback-Port definieren:

   ```javascript
   const PORT = process.env.PORT || 3000; // Fallback auf Port 3000, wenn PORT nicht gesetzt ist
   ```

2. **Umgebungsvariablen in Vercel:**

   - Stelle sicher, dass du deine Umgebungsvariablen (`DB_USER`, `DB_PASSWORD`, `DB_NAME`) im Vercel-Dashboard hinzufügst, damit diese im Produktionsumfeld verfügbar sind.

   **So fügst du Umgebungsvariablen in Vercel hinzu:**

   - Gehe zu deinem Projekt im Vercel-Dashboard.
   - Wähle "Settings" und dann "Environment Variables".
   - Füge jede Umgebungsvariable mit ihrem entsprechenden Wert hinzu (z.B., `DB_USER`, `DB_PASSWORD`, `DB_NAME`).

3. **Fehlerbehandlung:**

   - Die zentrale Fehlerbehandlungsmiddleware ist ebenfalls korrekt eingerichtet, um Fehler zu erfassen und eine JSON-Antwort zurückzugeben. Dies ist nützlich, da Vercel Fehler gut protokolliert und du diese in den Logs einsehen kannst.

4. **MongoDB-Connection-String:**

   - Dein MongoDB-Verbindungsstring verwendet Umgebungsvariablen, was ideal ist. Stelle sicher, dass diese Variablen korrekt gesetzt sind, bevor du das Projekt in Vercel deployst.

5. **Optional: Logging verbessern**

   - Du könntest eine weitere Middleware hinzufügen, die alle Anfragen protokolliert, um besser nachverfolgen zu können, was passiert:

   ```javascript
   app.use((req, res, next) => {
     console.log(`${req.method} ${req.url}`);
     next();
   });
   ```

### Deployment auf Vercel

Hier ist ein Schritt-für-Schritt-Verfahren, wie du dein Backend auf Vercel deployen kannst:

1. **Vercel CLI installieren:**

   - Wenn du das noch nicht getan hast, installiere die Vercel CLI:

   ```bash
   npm install -g vercel
   ```

2. **Vercel-Konfiguration (Optional, falls nicht automatisch erkannt):**

   - Wenn du eine `vercel.json`-Datei verwenden möchtest, könntest du sie wie folgt anpassen:

   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "index.js",
         "use": "@vercel/node"
       }
     ],
     "routes": [
       {
         "src": "/(.*)",
         "dest": "index.js"
       }
     ]
   }
   ```

   - Diese Konfiguration sorgt dafür, dass alle Anfragen an dein `index.js`-Skript weitergeleitet werden.

3. **Deployment starten:**

   - Navigiere im Terminal zu deinem Backend-Verzeichnis und führe `vercel` aus:

   ```bash
   vercel
   ```

   - Befolge die Anweisungen auf dem Bildschirm, um das Projekt zu Vercel hochzuladen.

4. **Überprüfen:**

   - Nach dem Deployment erhältst du eine URL, unter der dein Backend läuft. Teste die Endpunkte, um sicherzustellen, dass alles wie erwartet funktioniert.

5. **Frontend-Anpassung:**
   - Falls dein Frontend das Backend aufruft, passe die API-URLs im Frontend an, um auf die neue Vercel-Backend-URL zuzugreifen.

### 2. **Frontend zu Vercel hochladen**

Der Upload eines Frontend-Projekts zu Vercel ist relativ einfach:

**A. Frontend vorbereiten:**

- Stelle sicher, dass deine API-Aufrufe im Frontend auf das Backend auf Vercel verweisen. Wenn dein Backend z.B. unter `https://mein-backend.vercel.app` läuft, sollten deine API-Aufrufe in dieser Form gemacht werden.

**B. Hochladen des Frontends:**

- Geh ins Frontend-Verzeichnis und führe `vercel` aus, oder nutze das Vercel-Dashboard, um das Frontend hochzuladen.
- Vercel erkennt automatisch, dass es sich um ein React-Projekt handelt, und wird es entsprechend bauen und deployen.

### 3. **Vercel verknüpfen**

- Falls du dein Projekt auf GitHub, GitLab oder Bitbucket gehostet hast, kannst du Vercel mit deinem Repository verknüpfen. Dadurch wird jedes Mal, wenn du neue Commits hinzufügst, automatisch ein neues Deployment ausgelöst.

### 4. **Testen und Verifizieren**

- Nach dem erfolgreichen Deployment kannst du deine Anwendung unter der von Vercel bereitgestellten URL testen. Die URLs sehen normalerweise wie `https://mein-projekt.vercel.app` aus.
- Stelle sicher, dass alle API-Aufrufe funktionieren und das Frontend korrekt mit dem Backend kommuniziert.

### 5. **Optionale Konfigurationen**

- **Custom Domain:** Du kannst auch eine benutzerdefinierte Domain zu deinem Vercel-Projekt hinzufügen, um es unter einer eigenen URL verfügbar zu machen.
- **Skalierbarkeit:** Für größere Projekte oder mehr Traffic solltest du in Betracht ziehen, das Backend auf eine spezialisierte Plattform wie Heroku, AWS Lambda, oder ein dediziertes Hosting zu verlegen.

Mit diesen Schritten sollte dein React-Projekt mit einem voll funktionsfähigen Backend auf Vercel bereitgestellt und immer online sein.
