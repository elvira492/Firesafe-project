import React, { useState, useEffect } from "react";
import ReviewList from "../components/ReviewList";
import CreateReview from "../components/CreateReview";
import { getReviews, createReview } from "../utils/api";
import "../styles/AboutUs.css";
import dahms1 from "../assets/dahms1.jpg";
import dahms2 from "../assets/dahms2.jpg";
import dahms3 from "../assets/dahms3.jpg";

const About = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      const fetchedReviews = await getReviews();
      setReviews(fetchedReviews);
      setLoading(false);
    };
    fetchReviews();
  }, []);

  const handleCreateReview = async (newReview) => {
    const createdReview = await createReview(newReview);
    setReviews((prevReviews) => [...prevReviews, createdReview]);
  };

  return (
    <div>
      <div className="aboutcontainer">
        <div className="text">
          <h2>Über uns</h2>
          <p className="text-red-500 bg-red-200 font-mono">
            Dahms Brandschutztechnik steht für Qualität und 30 Jahre Erfahrung
            im Bereich des vorbeugenden Brandschutzes.
          </p>
          <p>
            Wir von Dahms Brandschutztechnik stehen Ihnen bei der Beratung,
            Planung und Umsetzung vieler Themen des Brandschutzes zur Seite.
          </p>
          <p>
            Unsere Serviceleistungen umfassen Wartungen im Bereich von
            Feuerlöschern, RWA-Anlagen und Wandhydranten, sowie
            Feuerlöschübungen und die Ausbildung von Brandschutzhelfern/-innen.
          </p>
          <div className="imgcont">
            <img className="img" src={dahms1} alt="" />
            <img className="img" src={dahms3} alt="" />
          </div>
        </div>

        <CreateReview onCreate={handleCreateReview} />
      </div>

      {loading ? <p>Laden...</p> : <ReviewList reviews={reviews} />}
    </div>
  );
};

export default About;
