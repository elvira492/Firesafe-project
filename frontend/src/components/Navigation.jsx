import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Twirl as Hamburger } from "hamburger-react";

const Navigation = () => {
  const location = useLocation(); // Hook zur Ermittlung des aktuellen Pfads
  const [isOpen, setIsOpen] = useState(false); // Zustand für das Hamburger
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 750); //navigation für media ab 750px, Zustand für große Bildschirme

  const items = [
    { name: "Home", to: "/", id: 1 },
    { name: "Über uns", to: "/about-us", id: 2 },
    { name: "Leistungen", to: "/service", id: 3 },
    { name: "Kontakt", to: "/contact", id: 4 },
  ];

  //navigation für media ab 750px, Event Listener für die Bildschirmbreite
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 750);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); //bis hier

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="burger">
        <Hamburger size={28} toggled={isOpen} toggle={setIsOpen} />
      </div>
      {/*ob Burger geöffnet ist? oder großer Bildschirm ? zeig dann navigation */}
      {(isOpen || isLargeScreen) && (
        <nav>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.to}
                  isActive={() => location.pathname === item.to} // Aktiver Link
                  activeClassName="active" // Klasse für aktiven Link
                  onClick={toggleMenu} // Menü schließen beim Klick auf einen Link
                >
                  {item.name} {/* Name des Links rendern */}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navigation;
