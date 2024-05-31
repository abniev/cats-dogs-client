import { useContext, useEffect, useState } from "react";
import { AnimalsContext } from "../context/Animals.context";
import { useParams, Link } from "react-router-dom";
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
  }, [dogs, cats]);

  return (
    <div className="d-flex justify-content-center align-items-center">
      {currentAnimal ? (
        <div className="card mb-3 text-center" style={{ width: "80%" }}>
          <img
            src={currentAnimal.image}
            className="card-img-top"
            alt="animals"
            style={{ height: "50vh", objectFit: "contain" }}
          />
          <div className="card-body">
            <h5 className="card-title">Name: {currentAnimal.name}</h5>
            <p className="card-text">Age: {currentAnimal.age}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                Breed: {currentAnimal.breed}
              </small>
            </p>
            <div>
              <button
                onClick={() => handleDeleteAnimal(animal, currentAnimal.id)}
                className="btn bg-danger-subtle m-2"
              >
                Delete
              </button>
              <Link to={`/edit/${animal}/${animalId}`}>
                <button className="btn bg-warning-subtle m-2">Edit</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default AnimalDetails;
