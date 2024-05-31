import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const AnimalsContext = createContext();

function AnimalsProvider({ children }) {
  const [cats, setCats] = useState(null);
  const [dogs, setDogs] = useState(null);
  const navigate = useNavigate();

  const getAllDogs = async () => {
    try {
      const response = await axios.get(
        "https://cats-dogs-server.adaptable.app/dogs"
      );

      setDogs(response.data.reverse());
    } catch (error) {
      console.log(error);
    }
  };

  const getAllCats = async () => {
    try {
      const response = await axios.get(
        "https://cats-dogs-server.adaptable.app/cats"
      );

      setCats(response.data.reverse());
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddCat = async (e, newCat) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://cats-dogs-server.adaptable.app/cats",
        newCat
      );

      if (response.status === 200 || response.status === 201) {
        getAllCats();
        toast.success("Your cat was added to the list!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddDog = async (e, newDog) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://cats-dogs-server.adaptable.app/dogs",
        newDog
      );

      if (response.status === 200 || response.status === 201) {
        getAllDogs();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteAnimal = async (animal, animalId) => {
    try {
      const confirmed = confirm(
        "Are you sure you want to delete this? Some people may find it cute😺🐶"
      );
      if (confirmed) {
        const response = await axios.delete(
          `https://cats-dogs-server.adaptable.app/${animal}/${animalId}`
        );

        if (response.status === 200) {
          toast.success(`${animal} was succesfully deleted!`);
          getAllCats();
          getAllDogs();
          navigate(-1);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCats();
    getAllDogs();
  }, []);

  return (
    <AnimalsContext.Provider
      value={{ cats, dogs, handleAddCat, handleAddDog, handleDeleteAnimal }}
    >
      {children}
    </AnimalsContext.Provider>
  );
}

export { AnimalsContext, AnimalsProvider };
