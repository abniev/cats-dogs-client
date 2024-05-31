import { useState, createContext, useEffect } from "react";
import axios from "axios";

const AnimalsContext = createContext();

function AnimalsProvider({ children }) {
  const [cats, setCats] = useState(null);
  const [dogs, setDogs] = useState(null);

  return (
    <AnimalsContext.Provider value={{ cats, dogs }}>
      {children}
    </AnimalsContext.Provider>
  );
}

export { AnimalsContext, AnimalsProvider };
