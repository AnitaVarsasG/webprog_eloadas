import React, { useState, useEffect } from "react";
import axios from "axios";

function AxiosApp() {
  
  const API_URL = "http://liunjtm3bhzp.nhely.hu/backend/api.php";

  const [tornyok, setTornyok] = useState([]);
  const [helyszinek, setHelyszinek] = useState([]);
  const [formData, setFormData] = useState({
    darab: "",
    teljesitmeny: "",
    kezdev: "",
    helyszinid: "",
  });

  // Adatok betöltése
  useEffect(() => {
    betoltAdatok();
    betoltHelyszinek();
  }, []);

  const betoltAdatok = async () => {
    try {
      const response = await axios.get(API_URL);
      setTornyok(response.data);
    } catch (error) {
      console.error("Hiba a tornyok betöltésekor:", error);
    }
  };

  const betoltHelyszinek = async () => {
    try {
      const response = await axios.get(`${API_URL}?action=helyszin`);
      setHelyszinek(response.data);
    } catch (error) {
      console.error("Hiba a helyszínek betöltésekor:", error);
    }
  };

  // CREATE
  const hozzaad = async () => {
    if (!formData.darab || !formData.helyszinid)
      return alert("Töltsd ki a mezőket!");
    try {
      await axios.post(API_URL, formData);
      setFormData({ darab: "", teljesitmeny: "", kezdev: "", helyszinid: "" });
      betoltAdatok();
    } catch (error) {
      alert("Sikertelen mentés!");
    }
  };

  // DELETE
  const torol = async (id) => {
    if (!window.confirm("Biztosan törlöd?")) return;
    try {
      await axios.delete(API_URL, { data: { id: id } });
      betoltAdatok();
    } catch (error) {
      alert("Hiba a törlésnél!");
    }
  };

  // UPDATE
  const modosit = async (t) => {
    const ujDarab = prompt("Új darabszám:", t.darab);
    if (ujDarab) {
      try {
        await axios.put(API_URL, { ...t, darab: ujDarab });
        betoltAdatok();
      } catch (error) {
        alert("Hiba a módosításnál!");
      }
    }
  };

  return (
    <main>
      <h2>Széltorony Kezelés (React + Axios)</h2>

      <div className="form-group">
        <input
          type="number"
          placeholder="Darab"
          value={formData.darab}
          onChange={(e) => setFormData({ ...formData, darab: e.target.value })}
        />
        <input
          type="number"
          placeholder="Teljesítmény"
          value={formData.teljesitmeny}
          onChange={(e) =>
            setFormData({ ...formData, teljesitmeny: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Év"
          value={formData.kezdev}
          onChange={(e) => setFormData({ ...formData, kezdev: e.target.value })}
        />

        <select
          value={formData.helyszinid}
          onChange={(e) =>
            setFormData({ ...formData, helyszinid: e.target.value })
          }
        >
          <option value="">Válassz helyszínt...</option>
          {helyszinek.map((h) => (
            <option key={h.id} value={h.id}>
              {h.nev}
            </option>
          ))}
        </select>

        <button className="add" onClick={hozzaad}>
          Mentés
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Darab</th>
            <th>kW</th>
            <th>Év</th>
            <th>Helyszín</th>
            <th>Műveletek</th>
          </tr>
        </thead>
        <tbody>
          {tornyok.map((t) => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.darab}</td>
              <td>{t.teljesitmeny}</td>
              <td>{t.kezdev}</td>
              <td>{t.telepules_nev}</td>
              <td>
                <button className="edit" onClick={() => modosit(t)}>
                  Módosítás
                </button>
                <button className="delete" onClick={() => torol(t.id)}>
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

export default AxiosApp;
