const menuHTML = `
    <header>
        <h1>Web programozás-1 Előadás Házi feladat</h1>
    </header>
    <nav>
        <a href="index.html">Főoldal</a>
        <a href="javascript.html">JS CRUD</a>
        <a href="react.html">React CRUD</a>
        <a href="spa.html">SPA Menü</a>
        <a href="fetchapi.html">Fetch API</a>
        <a href="axios.html">Axios CRUD</a>
        <a href="oojs.html">OOJS Grafika</a>
    </nav>
`;

const footerHTML = `
    <footer>
        Készítette Varsás Guti Anita, Kulcsár Dániel - Neptun: LIUNJT, M3BHZP
    </footer>
`;

document.body.insertAdjacentHTML("afterbegin", menuHTML);

document.body.insertAdjacentHTML("beforeend", footerHTML);
