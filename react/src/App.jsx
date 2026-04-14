import React, { useState } from "react";

function App() {
  const [megyek, setMegyek] = useState([
    { id: 1, nev: "Pest", regio: "Közép-Magyarország" },
    { id: 2, nev: "Győr-Moson-Sopron", regio: "Nyugat-Dunántúl" },
  ]);
  const [ujNev, setUjNev] = useState("");
  const [ujRegio, setUjRegio] = useState("");

  const hozzaad = () => {
    if (!ujNev || !ujRegio) return;
    setMegyek([...megyek, { id: Date.now(), nev: ujNev, regio: ujRegio }]);
    setUjNev("");
    setUjRegio("");
  };

  const torol = (id) => setMegyek(megyek.filter((m) => m.id !== id));

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

  return (
    <main>
      <h2>React CRUD (State alapú)</h2>
      <div className="form-group">
        <input
          value={ujNev}
          onChange={(e) => setUjNev(e.target.value)}
          placeholder="Megye neve"
        />
        <input
          value={ujRegio}
          onChange={(e) => setUjRegio(e.target.value)}
          placeholder="Régió"
        />
        <button className="add" onClick={hozzaad}>
          Hozzáadás
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Név</th>
            <th>Régió</th>
            <th>Műveletek</th>
          </tr>
        </thead>
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
      </table>
    </main>
  );
}

export default App;
