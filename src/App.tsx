import { useState } from "react";
import "./App.css";

class Uye {
  Adi: string = "";
  Soyadi: string = "";
  Eposta: string = "";
}

function App() {
  // const [yeniUye, setYeniUye] = useState(new Uye());
  let yeniUye = new Uye();
  yeniUye.Adi = "Kadir";
  function gosterBas() {
    // yeniUye.Adi = "kjncksncdsknsd";
    console.log(yeniUye);
  }

  return (
    <div className="App">
      <div>
        <div>
          <label></label>
        </div>
      </div>
      <header className="App-header">
        <label>Adı:</label>
        <input
          onChange={(event) => {
            yeniUye.Adi = event.target.value;
          }}
        ></input>
        <label>Soyadı:</label>
        <input
          onChange={(event) => {
            yeniUye.Soyadi = event.target.value;
          }}
        ></input>
        <label>E-Posta:</label>
        <input
          onChange={(event) => {
            yeniUye.Eposta = event.target.value;
          }}
        ></input>
        <button onClick={gosterBas}>Göster</button>
      </header>
    </div>
  );
}

export default App;
