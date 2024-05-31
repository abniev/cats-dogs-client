import { useContext, useEffect, useState } from "react";
import { AnimalsContext } from "../context/Animals.context";
import { useParams } from "react-router-dom";
function AnimalDetails() {
  const [currentAnimal, setCurrentAnimal] = useState(null);
  const { animal, animalId } = useParams();
  const { cats, dogs, handleDeleteAnimal } = useContext(AnimalsContext);

  useEffect(() => {
    dogs &&
      cats &&
      setCurrentAnimal(
        animal === "cats"
          ? cats.find((cat) => cat.id === animalId)
          : dogs.find((dog) => dog.id === animalId)
      );
  }, [dogs]);

  return (
    <div className="d-flex justify-content-center align-items-center">
      {currentAnimal ? (
        <div className="card mb-3 text-center" style={{ width: "80%" }}>
          <img
            src={
              animal === "cats"
                ? "https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg"
                : "https://media.cnn.com/api/v1/images/stellar/prod/230412095218-02-shortest-dog.jpg?c=16x9&q=h_833,w_1480,c_fill"
            }
            className="card-img-top"
            alt="animals"
          />
          <div className="card-body">
            <h5 className="card-title">Name: {currentAnimal.name}</h5>
            <p className="card-text">Age: {currentAnimal.age}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                Breed: {currentAnimal.breed}
              </small>
            </p>
            <button
              onClick={() => handleDeleteAnimal(animal, currentAnimal.id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default AnimalDetails;
