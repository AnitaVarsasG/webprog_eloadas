# Széltorony Kezelő Alkalmazás
## Web programozás-1 Előadás Házi Feladat Dokumentáció

**Készítették:** LIUNJT, M3BHZP  
**Dátum:** 2025/2026. tanév

---

# Tartalomjegyzék

1. [Bevezetés](#1-bevezetés)
2. [JavaScript CRUD](#2-javascript-crud-tömb-alapú-adatkezelés)
3. [React CRUD](#3-react-crud-state-alapú-adatkezelés)
4. [Single Page Application](#4-single-page-application-spa)
5. [Fetch API](#5-fetch-api-szerveres-crud)
6. [Backend és Adatbázis](#6-backend-és-adatbázis)
7. [Technikai Adatok](#7-technikai-adatok-és-hozzáférések)

---

# 1. Bevezetés

## 1.1 Az alkalmazás célja

A **Széltorony Kezelő Alkalmazás** egy webes alkalmazás, amely a magyarországi széltornyok adatainak kezelésére szolgál. Az alkalmazás lehetővé teszi a széltornyok, megyék és helyszínek nyilvántartását, beleértve a technikai adatokat (darabszám, teljesítmény, üzembe helyezés éve).

## 1.2 Fejlesztők

| Neptun kód | Szerepkör |
|------------|-----------|
| LIUNJT | Fejlesztő |
| M3BHZP | Fejlesztő |

## 1.3 Projekt URL-ek

| Leírás | URL |
|--------|-----|
| **Weboldal (Éles)** | http://liunjtm3bhzp.nhely.hu |
| **GitHub repository** | *[Kérlek add meg a GitHub URL-t]* |

## 1.4 Alkalmazás főbb funkciói

Az alkalmazás az alábbi főbb funkcionalitásokat valósítja meg:

1. **Tömb alapú CRUD műveletek** - JavaScript segítségével
2. **React State alapú CRUD** - React komponensekkel
3. **Single Page Application (SPA)** - Több játék/alkalmazás egy oldalon
4. **Szerveroldali adatkezelés** - Fetch API-val
5. **PHP Backend** - REST API szerverrel
6. **MySQL adatbázis** - Adattárolás

## 1.5 Képernyőkép - Főoldal

![Főoldal képernyőkép](screenshots/fooldal.png)
*<!-- SCREENSHOT PLACEHOLDER: Készítsen képernyőképet a főoldalról (index.html) -->*

## 1.6 Navigáció

Az alkalmazás menürendszere:

| Menüpont | Leírás | Fájl |
|----------|--------|------|
| Főoldal | Kezdőlap az alkalmazás bemutatásával | index.html |
| JS CRUD | JavaScript tömb alapú adatkezelés | javascript.html |
| React CRUD | React state alapú adatkezelés | react.html |
| SPA | Single Page Application játékokkal | spa.html |
| Fetch API | Szerveres adatkezelés Fetch API-val | fetchapi.html |

---

# 2. JavaScript CRUD (Tömb alapú adatkezelés)

## 2.1 Feladat leírása

Ez az oldal tisztán JavaScript alapú CRUD (Create, Read, Update, Delete) műveleteket valósít meg, tömb adatszerkezet használatával. Az adatok nem perzisztensek - az oldal újratöltésekor visszaállnak az alapértelmezett értékekre.

## 2.2 Megvalósítás helye

- **Fájl:** `javascript.html`
- **Elérhető URL:** http://liunjtm3bhzp.nhely.hu/javascript.html

## 2.3 Funkciók

### 2.3.1 Adatszerkezet

A megyék adatai egy JavaScript tömbben tárolódnak:

```javascript
let adatok = [
    {id: 1, nev: "Borsod-Abaúj-Zemplén", regio: "Észak-Magyarország"},
    {id: 2, nev: "Heves", regio: "Észak-Magyarország"}
];
```

### 2.3.2 Create (Létrehozás)

Új megye hozzáadása a `hozzaad()` függvénnyel:

```javascript
function hozzaad() {
    const n = document.getElementById('mNev').value;
    const r = document.getElementById('mReg').value;
    if (!n || !r) return alert("Töltsd ki!");
    adatok.push({id: Date.now(), nev: n, regio: r});
    frissit();
}
```

**Működés:**
- Beolvassa a megye nevét és régióját az input mezőkből
- Validálja, hogy mindkét mező ki legyen töltve
- Új egyedi ID-t generál a `Date.now()` segítségével
- Hozzáadja az új elemet a tömbhöz
- Frissíti a megjelenítést

### 2.3.3 Read (Olvasás/Megjelenítés)

A `frissit()` függvény rendereli az adatokat táblázatba:

```javascript
function frissit() {
    const tbody = document.getElementById('lista');
    tbody.innerHTML = adatok.map((m, i) => `
        <tr>
            <td>${m.id}</td><td>${m.nev}</td><td>${m.regio}</td>
            <td>
                <button class="edit" onclick="szerkeszt(${i})">Módosítás</button>
                <button class="delete" onclick="torol(${i})">Törlés</button>
            </td>
        </tr>
    `).join('');
}
```

### 2.3.4 Update (Módosítás)

A `szerkeszt()` függvény prompt ablakokkal kéri be az új adatokat:

```javascript
function szerkeszt(i) {
    const n = prompt("Új név:", adatok[i].nev);
    const r = prompt("Új régió:", adatok[i].regio);
    if (n && r) {adatok[i].nev = n; adatok[i].regio = r; frissit();}
}
```

### 2.3.5 Delete (Törlés)

A `torol()` függvény eltávolítja az elemet a tömbből:

```javascript
function torol(i) {
    adatok.splice(i, 1); 
    frissit();
}
```

## 2.4 Képernyőképek

### 2.4.1 JavaScript CRUD oldal

![JS CRUD oldal](screenshots/js-crud-lista.png)
*<!-- SCREENSHOT PLACEHOLDER: Készítsen képernyőképet a javascript.html oldalról, ahol látszik a táblázat az adatokkal -->*

### 2.4.2 Új elem hozzáadása

![Új elem hozzáadása](screenshots/js-crud-hozzaadas.png)
*<!-- SCREENSHOT PLACEHOLDER: Készítsen képernyőképet, ahol kitöltötte az input mezőket és hozzáad egy új megyét -->*

### 2.4.3 Elem módosítása

![Elem módosítása](screenshots/js-crud-modositas.png)
*<!-- SCREENSHOT PLACEHOLDER: Készítsen képernyőképet a prompt ablakról módosításkor -->*

### 2.4.4 Elem törlése után

![Elem törlése után](screenshots/js-crud-torles.png)
*<!-- SCREENSHOT PLACEHOLDER: Készítsen képernyőképet az állapotról egy elem törlése után -->*

## 2.5 UI elemek

| Elem | Típus | Funkció |
|------|-------|---------|
| Megye neve | `<input type="text">` | Megye nevének bevitele |
| Régió | `<input type="text">` | Régió nevének bevitele |
| Hozzáadás | `<button class="add">` | Új elem létrehozása |
| Módosítás | `<button class="edit">` | Meglévő elem szerkesztése |
| Törlés | `<button class="delete">` | Elem eltávolítása |

---

# 3. React CRUD (State alapú adatkezelés)

## 3.1 Feladat leírása

Ez az oldal React komponens alapú CRUD műveleteket valósít meg, a React `useState` hook segítségével. A state menedzsment biztosítja az automatikus újrarenderelést az adatok változásakor.

## 3.2 Megvalósítás helye

- **Fájl:** `react.html` és `src/App.jsx`
- **Elérhető URL:** http://liunjtm3bhzp.nhely.hu/react.html

## 3.3 React projekt struktúra

```
src/
├── App.jsx           # Fő CRUD komponens
├── main.jsx          # React belépési pont
├── App.css           # Komponens stílusok
└── index.css         # Globális stílusok
```

## 3.4 Funkciók

### 3.4.1 State kezelés

A komponens React useState hook-ot használ az adatok és input értékek tárolására:

```jsx
const [megyek, setMegyek] = useState([
    { id: 1, nev: "Pest", regio: "Közép-Magyarország" },
    { id: 2, nev: "Győr-Moson-Sopron", regio: "Nyugat-Dunántúl" },
]);
const [ujNev, setUjNev] = useState("");
const [ujRegio, setUjRegio] = useState("");
```

### 3.4.2 Create (Létrehozás)

```jsx
const hozzaad = () => {
    if (!ujNev || !ujRegio) return;
    setMegyek([...megyek, { id: Date.now(), nev: ujNev, regio: ujRegio }]);
    setUjNev("");
    setUjRegio("");
};
```

**Működés:**
- Spread operátorral (`...megyek`) másolja a meglévő tömböt
- Hozzáfűzi az új elemet
- Üríti az input mezőket a state frissítésével

### 3.4.3 Read (Olvasás/Megjelenítés)

A JSX-ben a `map()` függvénnyel rendereli az elemeket:

```jsx
<tbody>
    {megyek.map((m) => (
        <tr key={m.id}>
            <td>{m.id}</td>
            <td>{m.nev}</td>
            <td>{m.regio}</td>
            <td>
                <button className="edit" onClick={() => szerkeszt(m.id)}>
                    Módosítás
                </button>
                <button className="delete" onClick={() => torol(m.id)}>
                    Törlés
                </button>
            </td>
        </tr>
    ))}
</tbody>
```

### 3.4.4 Update (Módosítás)

```jsx
const szerkeszt = (id) => {
    const m = megyek.find((x) => x.id === id);
    const n = prompt("Új név:", m.nev);
    const r = prompt("Új régió:", m.regio);
    if (n && r) {
        setMegyek(
            megyek.map((x) => (x.id === id ? { ...x, nev: n, regio: r } : x)),
        );
    }
};
```

### 3.4.5 Delete (Törlés)

```jsx
const torol = (id) => setMegyek(megyek.filter((m) => m.id !== id));
```

## 3.5 Controlled Components

Az input mezők "controlled component" mintát követnek:

```jsx
<input
    value={ujNev}
    onChange={(e) => setUjNev(e.target.value)}
    placeholder="Megye neve"
/>
```

## 3.6 Képernyőképek

### 3.6.1 React CRUD oldal

![React CRUD oldal](screenshots/react-crud-lista.png)
*<!-- SCREENSHOT PLACEHOLDER: Készítsen képernyőképet a react.html oldalról a táblázattal -->*

### 3.6.2 Új elem hozzáadása Reactben

![Új elem hozzáadása](screenshots/react-crud-hozzaadas.png)
*<!-- SCREENSHOT PLACEHOLDER: Készítsen képernyőképet az input mezők kitöltéséről és hozzáadásról -->*

### 3.6.3 Módosítás prompt ablak

![Módosítás](screenshots/react-crud-modositas.png)
*<!-- SCREENSHOT PLACEHOLDER: Készítsen képernyőképet a módosítás prompt ablakáról -->*

## 3.7 Különbségek a JS CRUD-hoz képest

| Aspektus | JavaScript CRUD | React CRUD |
|----------|-----------------|------------|
| Adattárolás | Globális tömb | useState hook |
| DOM frissítés | Manuális innerHTML | Automatikus re-render |
| Input kezelés | getElementById | Controlled components |
| Kód szervezés | Script tag | JSX komponens |
| Újrafelhasználhatóság | Alacsony | Komponens újrahasználható |

---

# 4. Single Page Application (SPA)

## 4.1 Feladat leírása

A Single Page Application (SPA) oldal bemutatja, hogyan lehet egy oldalon belül több különböző alkalmazást/játékot megjeleníteni anélkül, hogy az oldal újratöltődne. A navigáció React state segítségével történik.

## 4.2 Megvalósítás helye

- **Fájl:** `spa.html`, `src/SpaApp.jsx`, `src/spa_main.jsx`
- **Komponensek:** `src/components/TicTacToe.jsx`, `src/components/Calculator.jsx`
- **Elérhető URL:** http://liunjtm3bhzp.nhely.hu/spa.html

## 4.3 SPA projekt struktúra

```
src/
├── SpaApp.jsx                 # SPA fő komponens
├── spa_main.jsx               # SPA belépési pont
└── components/
    ├── TicTacToe.jsx          # Tic-Tac-Toe játék
    └── Calculator.jsx          # Számológép alkalmazás
```

## 4.4 Fő SPA Komponens

### 4.4.1 SpaApp.jsx

```jsx
import React, { useState } from "react";
import TicTacToe from "./components/TicTacToe";
import Calculator from "./components/Calculator";

function SpaApp() {
    const [page, setPage] = useState("tictactoe");

    return (
        <main>
            <div className="card">
                <h2>Single Page Application (SPA)</h2>
                <div style={{ marginBottom: "20px" }}>
                    <button className="add" onClick={() => setPage("tictactoe")}>
                        Amőba (Tic-Tac-Toe)
                    </button>
                    <button className="add" onClick={() => setPage("calculator")}>
                        Számológép
                    </button>
                </div>

                <div className="game-container">
                    {page === "tictactoe" ? <TicTacToe /> : <Calculator />}
                </div>
            </div>
        </main>
    );
}
```

**SPA működési elve:**
- A `page` state tárolja az aktuális nézetet
- A gombok frissítik a state-et
- Feltételes renderelés dönti el, melyik komponens jelenjen meg
- Az oldal **nem töltődik újra** a váltáskor

## 4.5 Tic-Tac-Toe Játék

### 4.5.1 Játék logika

```jsx
function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const handleClick = (i) => {
        if (board[i]) return;
        const nextBoard = board.slice();
        nextBoard[i] = xIsNext ? "X" : "O";
        setBoard(nextBoard);
        setXIsNext(!xIsNext);
    };
}
```

### 4.5.2 Játéktábla renderelése

```jsx
<div style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 60px)",
    gap: "5px",
    justifyContent: "center",
}}>
    {board.map((val, i) => (
        <button key={i} onClick={() => handleClick(i)}>
            {val}
        </button>
    ))}
</div>
```

## 4.6 Számológép Alkalmazás

### 4.6.1 Komponens kód

```jsx
function Calculator() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);

    return (
        <div>
            <h3>Egyszerű Számológép</h3>
            <input type="number" value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
            <input type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value))} />
            <div>
                <button onClick={() => setResult(num1 + num2)}>+</button>
                <button onClick={() => setResult(num1 - num2)}>-</button>
                <button onClick={() => setResult(num1 * num2)}>*</button>
            </div>
            <h4>Eredmény: {result}</h4>
        </div>
    );
}
```

## 4.7 Képernyőképek

### 4.7.1 SPA főoldal - Tic-Tac-Toe

![SPA Tic-Tac-Toe](screenshots/spa-tictactoe.png)
*<!-- SCREENSHOT PLACEHOLDER: Készítsen képernyőképet a SPA oldalról a Tic-Tac-Toe játékkal -->*

### 4.7.2 Tic-Tac-Toe játék közben

![Tic-Tac-Toe játék](screenshots/spa-tictactoe-jatek.png)
*<!-- SCREENSHOT PLACEHOLDER: Készítsen képernyőképet egy folyamatban lévő játékról X és O jelekkel -->*

### 4.7.3 Számológép nézet

![Számológép](screenshots/spa-calculator.png)
*<!-- SCREENSHOT PLACEHOLDER: Készítsen képernyőképet a számológép nézetről eredménnyel -->*

## 4.8 SPA előnyei

| Előny | Leírás |
|-------|--------|
| Gyors navigáció | Nincs teljes oldal újratöltés |
| Jobb UX | Azonnali reakció a felhasználói interakciókra |
| State megőrzés | Az alkalmazás állapota megmarad navigálás közben |
| Kevesebb szerverterhelés | Csak az adatok töltődnek, nem a teljes HTML |

---

# 5. Fetch API (Szerveres CRUD)

## 5.1 Feladat leírása

Ez az oldal valódi szerveroldali adatkezelést valósít meg a JavaScript Fetch API segítségével. Az adatok MySQL adatbázisban tárolódnak és PHP REST API-n keresztül érhetők el.

## 5.2 Megvalósítás helye

- **Frontend fájl:** `fetchapi.html`
- **Backend API:** `backend/api.php`
- **Elérhető URL:** http://liunjtm3bhzp.nhely.hu/fetchapi.html
- **API végpont:** http://liunjtm3bhzp.nhely.hu/backend/api.php

## 5.3 API konfiguráció

```javascript
const API_URL = 'http://liunjtm3bhzp.nhely.hu/backend/api.php';
```

## 5.4 Adatbázis séma

A `torony` tábla szerkezete:

| Oszlop | Típus | Leírás |
|--------|-------|--------|
| id | INT (PK) | Egyedi azonosító |
| darab | INT | Tornyok száma |
| teljesitmeny | INT | Teljesítmény kW-ban |
| kezdev | INT | Üzembe helyezés éve |
| helyszinid | INT (FK) | Kapcsolat a helyszín táblához |

## 5.5 CRUD Műveletek

### 5.5.1 Read - GET kérés

```javascript
async function betoltes() {
    const valasz = await fetch(API_URL);
    const adatok = await valasz.json();

    const tbody = document.getElementById('lista');
    tbody.innerHTML = adatok.map(t => `
        <tr>
            <td>${t.id}</td>
            <td>${t.darab} db</td>
            <td>${t.teljesitmeny} kW</td>
            <td>${t.kezdev}</td>
            <td><strong>${t.telepules_nev}</strong></td>
            <td>
                <button class="edit" onclick="szerkeszt(...)">Módosítás</button>
                <button class="delete" onclick="torol(${t.id})">Törlés</button>
            </td>
        </tr>
    `).join('');
}
```

### 5.5.2 Create - POST kérés

```javascript
async function hozzaad() {
    await fetch(API_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            darab: darab, 
            teljesitmeny: telj, 
            kezdev: ev, 
            helyszinid: hely
        })
    });
    betoltes();
}
```

### 5.5.3 Update - PUT kérés

```javascript
async function szerkeszt(id, regiDarab, regiTelj, regiEv, regiHely) {
    if (ujDarab && ujTelj && ujEv && ujHely) {
        await fetch(API_URL, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: id, 
                darab: ujDarab, 
                teljesitmeny: ujTelj, 
                kezdev: ujEv, 
                helyszinid: ujHely
            })
        });
        betoltes();
    }
}
```

### 5.5.4 Delete - DELETE kérés

```javascript
async function torol(id) {
    if (confirm("Biztosan törlöd?")) {
        await fetch(API_URL, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id: id})
        });
        betoltes();
    }
}
```

## 5.6 Képernyőképek

### 5.6.1 Fetch API CRUD oldal

![Fetch API lista](screenshots/fetchapi-lista.png)
*<!-- SCREENSHOT PLACEHOLDER: Készítsen képernyőképet a fetchapi.html oldalról -->*

### 5.6.2 Új széltorony hozzáadása

![Új torony](screenshots/fetchapi-hozzaadas.png)
*<!-- SCREENSHOT PLACEHOLDER: Készítsen képernyőképet az űrlap kitöltéséről -->*

### 5.6.3 DevTools Network nézet

![Network nézet](screenshots/fetchapi-network.png)
*<!-- SCREENSHOT PLACEHOLDER: Készítsen képernyőképet a DevTools Network fülről -->*

---

# 6. Backend és Adatbázis

## 6.1 Fájlok és elérési utak

| Fájl | Cél |
|------|-----|
| `backend/api.php` | REST API végpontok |
| `backend/config.php` | Adatbázis konfiguráció |
| `backend/db.php` | PDO kapcsolat létrehozása |

## 6.2 REST API Műveletek

### 6.2.1 CORS Beállítások

```php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=utf-8");
```

### 6.2.2 GET - Tornyok listázása

```php
$sql = "SELECT t.id, t.darab, t.teljesitmeny, t.kezdev, t.helyszinid, 
               h.nev AS telepules_nev 
        FROM torony t 
        JOIN helyszin h ON t.helyszinid = h.id 
        ORDER BY t.id DESC";
$stmt = $dbh->query($sql);
echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
```

### 6.2.3 POST - Új rekord

```php
$stmt = $dbh->prepare("INSERT INTO torony (darab, teljesitmeny, kezdev, helyszinid) 
                       VALUES (:darab, :teljesitmeny, :kezdev, :helyszinid)");
$stmt->execute([...]);
```

### 6.2.4 PUT - Módosítás

```php
$stmt = $dbh->prepare("UPDATE torony SET darab=:darab, teljesitmeny=:teljesitmeny, 
                       kezdev=:kezdev, helyszinid=:helyszinid WHERE id=:id");
$stmt->execute([...]);
```

### 6.2.5 DELETE - Törlés

```php
$stmt = $dbh->prepare("DELETE FROM torony WHERE id=:id");
$stmt->execute(['id' => $input['id']]);
```

## 6.3 Adatbázis struktúra

### ER Diagram

```
┌─────────────┐       ┌─────────────┐
│  helyszin   │       │   torony    │
├─────────────┤       ├─────────────┤
│ id (PK)     │◄──────│ id (PK)     │
│ nev         │   1:N │ darab       │
└─────────────┘       │ teljesitmeny│
                      │ kezdev      │
                      │ helyszinid  │──► FK
                      └─────────────┘
```

## 6.4 Képernyőképek

### 6.4.1 phpMyAdmin

![phpMyAdmin](screenshots/phpmyadmin-struktura.png)
*<!-- SCREENSHOT PLACEHOLDER: Készítsen képernyőképet a phpMyAdmin felületről -->*

### 6.4.2 Torony tábla adatai

![Torony tábla](screenshots/phpmyadmin-torony.png)
*<!-- SCREENSHOT PLACEHOLDER: Készítsen képernyőképet a torony tábla adatairól -->*

---

# 7. Technikai Adatok és Hozzáférések

## 7.1 Weboldal elérhetőségek

| Leírás | URL |
|--------|-----|
| **Weboldal főoldala** | http://liunjtm3bhzp.nhely.hu |
| **JS CRUD** | http://liunjtm3bhzp.nhely.hu/javascript.html |
| **React CRUD** | http://liunjtm3bhzp.nhely.hu/react.html |
| **SPA** | http://liunjtm3bhzp.nhely.hu/spa.html |
| **Fetch API** | http://liunjtm3bhzp.nhely.hu/fetchapi.html |
| **API végpont** | http://liunjtm3bhzp.nhely.hu/backend/api.php |

## 7.2 GitHub Repository

| Leírás | URL |
|--------|-----|
| **GitHub projekt** | https://github.com/AnitaVarsasG/webprog_eloadas |

## 7.3 Tárhely (Hosting) Hozzáférés

### 7.3.1 FTP hozzáférés

| Paraméter | Érték |
|-----------|-------|
| **FTP szerver** | m3bhzpliunjt@ftp.nethely.hu |
| **FTP port** | 21 |
| **Felhasználónév** | *[Kérlek add meg az FTP felhasználónevet]* |
| **Jelszó** | liunjtm3bhzp |

### 7.3.2 Webes kezelőfelület

| Paraméter | Érték |
|-----------|-------|
| **cPanel/Admin URL** | https://www.nethely.hu/ |
| **Felhasználónév** | daniel.kulcsar@hotmail.com |
| **Jelszó** | liunjtm3bhzp |

## 7.4 Adatbázis Hozzáférés

### 7.4.1 MySQL adatbázis

| Paraméter | Érték |
|-----------|-------|
| **phpMyAdmin URL** | *[Kérlek add meg a phpMyAdmin URL-t]* |
| **Adatbázis szerver** | localhost |
| **Adatbázis név** | szeleromu |
| **Felhasználónév** | szeleromu |
| **Jelszó** | liunjtm3bhzp |

## 7.5 Használt technológiák

| Technológia | Verzió | Cél |
|-------------|--------|-----|
| HTML5 | 5 | Markup nyelv |
| CSS3 | 3 | Stílusok |
| JavaScript | ES6+ | Frontend logika |
| React | 18.x | SPA komponensek |
| Vite | 4.x | Build tool |
| PHP | 7.4+ | Backend API |
| MySQL | 5.7+ | Adatbázis |

## 7.6 Projekt struktúra

```
webprog_eloadas/
├── index.html           # Főoldal
├── javascript.html      # JS CRUD
├── react.html           # React CRUD
├── spa.html             # SPA oldal
├── fetchapi.html        # Fetch API CRUD
├── style.css            # Globális stílusok
│
├── backend/
│   ├── api.php          # REST API
│   ├── config.php       # DB konfiguráció
│   └── db.php           # PDO kapcsolat
│
├── src/
│   ├── main.jsx         # React belépési pont
│   ├── spa_main.jsx     # SPA belépési pont
│   ├── App.jsx          # CRUD komponens
│   ├── SpaApp.jsx       # SPA fő komponens
│   └── components/
│       ├── Calculator.jsx
│       └── TicTacToe.jsx
│
└── docs/
    └── screenshots/     # Képernyőképek
```

## 7.7 Feladatpontok összefoglalása

| Feladatpont | Megvalósítás | Helye |
|-------------|--------------|-------|
| Tömb alapú JS CRUD | ✅ | javascript.html |
| React State CRUD | ✅ | react.html, src/App.jsx |
| Single Page Application | ✅ | spa.html, src/SpaApp.jsx |
| Fetch API szerverkapcsolat | ✅ | fetchapi.html |
| PHP REST API | ✅ | backend/api.php |
| MySQL adatbázis | ✅ | backend/db.php |
| PDO prepared statements | ✅ | backend/api.php |
| CORS kezelés | ✅ | backend/api.php |

---

