import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const AnimalsContext = createContext();

function AnimalsProvider({ children }) {
  const [cats, setCats] = useState(null);
  const [dogs, setDogs] = useState(null);
  const navigate = useNavigate();

  //GET ALL DOGS
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

  //GET ALL CATS
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

  //ADD A CAT
  const handleAddCat = async (e, newCat, setNewCat) => {
    e.preventDefault();
    const modal = document.getElementById("catFormModal");
    const modalInstance = bootstrap.Modal.getInstance(modal);

    try {
      const response = await axios.post(
        "https://cats-dogs-server.adaptable.app/cats",
        newCat
      );

      if (response.status === 200 || response.status === 201) {
        getAllCats();
        toast.success("Your cat was added to the list!");
        modalInstance.hide();
        setNewCat({ name: "", age: 0, breed: "", image: "" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  //ADD A DOG
  const handleAddDog = async (e, newDog, setNewDog) => {
    e.preventDefault();
    const modal = document.getElementById("DogFormModal");
    const modalInstance = bootstrap.Modal.getInstance(modal);
    try {
      const response = await axios.post(
        "https://cats-dogs-server.adaptable.app/dogs",
        newDog
      );

      if (response.status === 200 || response.status === 201) {
        getAllDogs();
        modalInstance.hide();
        setNewDog({ name: "", age: 0, breed: "", image: "" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  //DELETE AN ANIMAL
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

  //UPDATE AN ANIMAL DOCUMENT
  const handleUpdateAnimal = async (e, animal, animalId, updatedAnimal) => {
    e.preventDefault();
    console.log("event in handle update", e);
    try {
      const response = await axios.put(
        `https://cats-dogs-server.adaptable.app/${animal}/${animalId}`,
        updatedAnimal
      );

      if (response.status === 200) {
        getAllCats();
        getAllDogs();
        toast.success("Animal was updated succesfully!");
        navigate(-1);
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
      value={{
        cats,
        dogs,
        handleAddCat,
        handleAddDog,
        handleDeleteAnimal,
        handleUpdateAnimal,
      }}
    >
      {children}
    </AnimalsContext.Provider>
  );
}

export { AnimalsContext, AnimalsProvider };
