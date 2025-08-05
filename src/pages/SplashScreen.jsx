import React, { useState, useEffect } from "react";

const SplashScreen = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#fffaf5",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <span style={{ fontSize: 48, marginBottom: 20 }}>☕️</span>
      <h2 style={{ color: "#6f4e37" }}>Brewing…</h2>
    </div>
  );
};

export default SplashScreen;