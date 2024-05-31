import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AnimalsContext } from "../context/Animals.context";
function EditAnimal() {
  const [animalToEdit, setAnimalToEdit] = useState(null);
  const { animal, animalId } = useParams();
  const { cats, dogs, handleDeleteAnimal, handleUpdateAnimal } =
    useContext(AnimalsContext);

  const handleChange = (e) => {
    setAnimalToEdit((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    dogs &&
      cats &&
      setAnimalToEdit(
        animal === "cats"
          ? cats.find((cat) => cat.id === animalId)
          : dogs.find((dog) => dog.id === animalId)
      );
  }, [dogs]);

  return (
    <div className="d-flex justify-content-center align-items-center flex-column ">
      {animalToEdit ? (
        <form
          onSubmit={(e) =>
            handleUpdateAnimal(e, animal, animalId, animalToEdit)
          }
          className="w-50 m-5 border border-2 rounded p-5"
        >
          <label>Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={animalToEdit.name}
            onChange={handleChange}
          />
          <label>Breed</label>
          <input
            type="text"
            name="breed"
            className="form-control"
            value={animalToEdit.breed}
            onChange={handleChange}
          />
          <label>Age</label>
          <input
            type="number"
            name="age"
            className="form-control"
            value={animalToEdit.age}
            onChange={handleChange}
          />
          <label>Image (URL)</label>
          <input
            type="url"
            name="image"
            className="form-control"
            value={animalToEdit.image}
            onChange={handleChange}
          />
          <button type="submit" className="btn bg-success-subtle m-2">
            Submit
          </button>

          <button
            onClick={() => handleDeleteAnimal(animal, animalToEdit.id)}
            type="button"
            className="btn bg-danger-subtle m-2"
          >
            Delete
          </button>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default EditAnimal;
