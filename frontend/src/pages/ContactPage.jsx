// Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <div>
      <h2>Kontaktinformationen</h2>
      <h3>Rufen Sie uns an</h3>
      <p>
        Mobil: <a href="tel:+491711768915">0171-1768915</a> - Andreas Dahms
        <button onClick={() => (window.location.href = "tel:+491711768915")}>
          Anrufen
        </button>
      </p>
      <p>
        Mobil: <a href="tel:+4916090380040">0160-90380040</a> - Falk Dahms
        <button onClick={() => (window.location.href = "tel:+4916090380040")}>
          Anrufen
        </button>
      </p>
      <p>
        Tel.: <a href="tel:+49519116988">05191-16988</a>
      </p>
      <p>
        Fax: <a href="tel:+49519171112">05191-71112</a>
      </p>
      <p>
        E-Mail:{" info@dahms-brandschutz.de"}
        <button
          onClick={() =>
            (window.location.href = "mailto:info@dahms-brandschutz.de")
          }
        >
          E-Mail senden
        </button>
      </p>

      <h3>Fragen Sie uns</h3>
      <div>KONTAKT FORM</div>
    </div>
  );
};

export default Contact;
