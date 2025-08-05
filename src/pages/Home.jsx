import React, { useState } from "react";
import RatingButtons from "../components/RatingButtons";
import { Container } from "reactstrap";
import { submitFeedback } from "../services/submitFeedback";
import NameInput from "../components/NameInput";

const Home = () => {
  const [rating, setRating] = useState(null);
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const resetForm = () => {
    setRating(null);
    setSubmitted(false);
    setName("");
  };

  const handleFeedbackSubmit = async (value) => {
    setRating(value);
    setSubmitted(true);
    console.log("User selected rating:", value);

    await submitFeedback(name, value);

    setTimeout(resetForm, 2000);
  };

  return (
    <Container
      fluid
      className="vh-100 d-flex justify-content-center align-items-center bg-coffee"
    >
      <div
        style={{
          backgroundColor: "#fffaf5",
          padding: "40px 30px",
          borderRadius: "20px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
          textAlign: "center",
          width: "90%",
          maxWidth: "600px",
          paddingBottom: "100px"
        }}
      >
        {!submitted ? (
          <>
            <h1
              className="mb-4"
              style={{
                fontFamily: "'Segoe UI', sans-serif",
                fontWeight: "600",
                color: "#5c3d2e",
              }}
            >
              ☕ Spill the beans — how are we today?
            </h1>
            <NameInput name={name} setName={setName} />
            <RatingButtons onRate={handleFeedbackSubmit} />
          </>
        ) : (
          <h1
            className="text-success display-6"
            style={{
              fontFamily: "'Segoe UI', sans-serif",
              color: "#4e342e",
            }}
          >
            Thanks for your feedback! ☕️
          </h1>
        )}
      </div>
    </Container>
  );
};

export default Home;
