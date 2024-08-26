import fireman from "../assets/fireman.jpg";
import "../styles/Home.css";

const HomePage = () => {
  return (
    <div className="home">
      <h2>Herzlich Willkommen</h2>
      <div>
        <p>Seit 30 Jahren Ihr Brandschutzspezialist in Soltau</p>
      </div>
      <div className="home-flex">
        <div className="home-container">
          <div>
            <h3>Qualität</h3>
            <p>
              Mit unserer langjährigen Erfahrung im Bereich des vorbeugenden
              Brandschutzes stellen wir einen hohen Anspruch an uns selbst und
              die Zufriedenheit unserer Kunden.
            </p>
          </div>
          <div>
            <h3>Angebot</h3>
            <p>
              Gerne erstellen wir Ihnen ein auf Ihren Bedarf zugeschnittenes
              Angebot und freuen uns über eine erfolgreiche Zusammenarbeit.
            </p>
          </div>
          <div>
            <h3>Leistungen</h3>
            <p>
              Feuerlöscher, Rauch- und Wärmeabzugsanlagen, Wandhydranten,
              Rauchwarnmelder, Schulungen und Löschübungen.
            </p>
          </div>
          <p>Für jegliche Fragen stehen wir Ihnen gerne zur Verfügung!</p>
        </div>
        <div className="images">
          <img className="fireman" src={fireman} alt="fireman" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
