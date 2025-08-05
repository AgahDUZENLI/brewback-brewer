import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import SplashScreen from "./pages/SplashScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? <SplashScreen /> : <Home />}
    </div>
  );
}

export default App;