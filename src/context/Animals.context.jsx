import { useState, createContext, useEffect } from "react";
import axios from "axios";

const AnimalsContext = createContext();

function AnimalsProvider({ children }) {
  const [cats, setCats] = useState(null);
  const [dogs, setDogs] = useState(null);

  const getAllDogs = async () => {
    try {
      const response = await axios.get(
        "https://cats-dogs-server.adaptable.app/dogs"
      );

      setDogs(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllCats = async () => {
    try {
      const response = await axios.get(
        "https://cats-dogs-server.adaptable.app/cats"
      );

      setCats(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCats();
    getAllDogs();
  }, []);

  return (
    <AnimalsContext.Provider value={{ cats, dogs }}>
      {children}
    </AnimalsContext.Provider>
  );
}

export { AnimalsContext, AnimalsProvider };
