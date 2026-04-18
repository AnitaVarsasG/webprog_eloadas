# 7. Technikai Adatok és Hozzáférések

## 7.1 Weboldal elérhetőségek

| Leírás | URL |
|--------|-----|
| **Weboldal főoldala** | http://liunjtm3bhzp.nhely.hu |
| **JS CRUD** | http://liunjtm3bhzp.nhely.hu/javascript.html |
| **React CRUD** | http://liunjtm3bhzp.nhely.hu/react.html |
| **SPA** | http://liunjtm3bhzp.nhely.hu/spa.html |
| **Fetch API** | http://liunjtm3bhzp.nhely.hu/fetchapi.html |
| **Axios CRUD** | http://liunjtm3bhzp.nhely.hu/axios.html |
| **OOJS Animáció** | http://liunjtm3bhzp.nhely.hu/oojs.html |
| **API végpont** | http://liunjtm3bhzp.nhely.hu/backend/api.php |

## 7.2 GitHub Repository

| Leírás | URL |
|--------|-----|
| **GitHub projekt** | *[Kérlek add meg a GitHub repository URL-t]* |

## 7.3 Tárhely (Hosting) Hozzáférés

### 7.3.1 FTP hozzáférés

| Paraméter | Érték |
|-----------|-------|
| **FTP szerver** | *[Kérlek add meg az FTP szerver címet]* |
| **FTP port** | 21 |
| **Felhasználónév** | *[Kérlek add meg az FTP felhasználónevet]* |
| **Jelszó** | *[Kérlek add meg az FTP jelszót]* |
| **Gyökérkönyvtár** | /public_html/ |

### 7.3.2 Webes kezelőfelület

| Paraméter | Érték |
|-----------|-------|
| **cPanel/Admin URL** | *[Kérlek add meg a kezelőfelület URL-t]* |
| **Felhasználónév** | *[Kérlek add meg a felhasználónevet]* |
| **Jelszó** | *[Kérlek add meg a jelszót]* |

## 7.4 Adatbázis Hozzáférés

### 7.4.1 MySQL adatbázis

| Paraméter | Érték |
|-----------|-------|
| **phpMyAdmin URL** | *[Kérlek add meg a phpMyAdmin URL-t]* |
| **Adatbázis szerver** | localhost |
| **Adatbázis név** | szeleromu |
| **Felhasználónév** | szeleromu |
| **Jelszó** | liunjtm3bhzp |

### 7.4.2 Adatbázis táblák

| Tábla neve | Leírás |
|------------|--------|
| helyszin | Települések/helyszínek adatai |
| torony | Széltornyok adatai |

## 7.5 Fejlesztői környezet

### 7.5.1 Használt technológiák

| Technológia | Verzió | Cél |
|-------------|--------|-----|
| HTML5 | 5 | Markup nyelv |
| CSS3 | 3 | Stílusok |
| JavaScript | ES6+ | Frontend logika, OOJS |
| React | 18.x | SPA komponensek |
| Axios | 1.x | HTTP kliens |
| Vite | 4.x | Build tool |
| PHP | 7.4+ | Backend API |
| MySQL | 5.7+ | Adatbázis |

### 7.5.2 Projekt struktúra

```
webprog_eloadas-main/
├── index.html           # Főoldal
├── javascript.html      # JS CRUD
├── react.html           # React CRUD
├── spa.html             # SPA oldal
├── fetchapi.html        # Fetch API CRUD
├── axios.html           # Axios CRUD
├── oojs.html            # OOJS Animáció
├── style.css            # Globális stílusok
├── layout.js            # Közös layout komponens
├── package.json         # NPM konfiguráció
├── vite.config.js       # Vite konfiguráció
│
├── backend/
│   ├── api.php          # REST API
│   ├── config.php       # DB konfiguráció
│   └── db.php           # PDO kapcsolat
│
├── src/
│   ├── main.jsx         # React belépési pont
│   ├── spa_main.jsx     # SPA belépési pont
│   ├── axios_main.jsx   # Axios belépési pont
│   ├── App.jsx          # CRUD komponens
│   ├── SpaApp.jsx       # SPA fő komponens
│   ├── AxiosApp.jsx     # Axios CRUD komponens
│   └── components/
│       ├── Calculator.jsx   # Számológép
│       └── TicTacToe.jsx    # Amőba játék
│
└── docs/                # Dokumentáció
    ├── 01-bevezetes.md
    ├── 02-js-crud.md
    ├── 03-react-crud.md
    ├── 04-spa.md
    ├── 05-fetchapi.md
    ├── 06-backend.md
    ├── 07-technikai-adatok.md
    ├── 08-axios.md
    └── 09-oojs.md
```

## 7.6 Telepítési útmutató

### 7.6.1 Lokális fejlesztés

```bash
# Projekt klónozása
git clone [GITHUB_URL]
cd webprog_eloadas-main

# Függőségek telepítése
npm install

# Fejlesztői szerver indítása
npm run dev
```

### 7.6.2 Production build

```bash
# Build készítése
npm run build

# A dist/ mappa tartalmát töltsd fel a szerverre
```

### 7.6.3 Éles szerverre telepítés

1. **Frontend fájlok feltöltése** FTP-n keresztül a `/public_html/` mappába
2. **Backend fájlok feltöltése** a `/public_html/backend/` mappába
3. **config.php** fájlban az adatbázis adatok beállítása
4. **Adatbázis létrehozása** phpMyAdmin-ban

## 7.7 Képernyőkép - Projekt fájlok

![VS Code projekt](screenshots/vscode-projekt.png)

## 7.8 Feladatpontok összefoglalása

| Feladatpont | Megvalósítás | Helye |
|-------------|--------------|-------|
| Tömb alapú JS CRUD | ✅ | javascript.html |
| React State CRUD | ✅ | react.html, src/App.jsx |
| Single Page Application | ✅ | spa.html, src/SpaApp.jsx |
| Fetch API szerverkapcsolat | ✅ | fetchapi.html |
| Axios HTTP kliens | ✅ | axios.html, src/AxiosApp.jsx |
| Objektumorientált JS (OOJS) | ✅ | oojs.html |
| PHP REST API | ✅ | backend/api.php |
| MySQL adatbázis | ✅ | backend/db.php |
| PDO prepared statements | ✅ | backend/api.php |
| CORS kezelés | ✅ | backend/api.php |

---

[← Backend](06-backend.md) | [Vissza a főoldalra](../README.md) | [Következő: Axios →](08-axios.md)
