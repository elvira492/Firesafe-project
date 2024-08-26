import "../styles/Contact.css";
import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="underline">Kontaktinformationen</h2>
      <h3>Rufen Sie uns an</h3>
      <p className="p-container">
        Mobil: <a href="tel:+491711768915">0171-1768915</a> Andreas Dahms
        <button
          className="contact-button"
          onClick={() => (window.location.href = "tel:+491711768915")}
        >
          Anrufen
        </button>
      </p>
      <p className="p-container">
        Mobil: <a href="tel:+4916090380040">0160-90380040</a> Falk Dahms
        <button
          className="contact-button"
          onClick={() => (window.location.href = "tel:+4916090380040")}
        >
          Anrufen
        </button>
      </p>
      <p>
        Tel.: <a href="tel:+49519116988">05191-16988</a>
      </p>
      <p>
        Fax: <a href="tel:+49519171112">05191-71112</a>
      </p>
      <p className="p-container">
        E-Mail:{" info@dahms-brandschutz.de"}
        <button
          onClick={() =>
            (window.location.href = "mailto:info@dahms-brandschutz.de")
          }
          className="contact-button"
        >
          Senden
        </button>
      </p>

      {/*   <h3>Fragen Sie uns</h3>
      <div>KONTAKT FORM</div> */}
    </div>
  );
};

export default Contact;
