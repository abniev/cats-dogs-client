import { useContext } from "react";
import { AnimalsContext } from "../context/Animals.context";
import { Link } from "react-router-dom";
function DogList() {
  const { dogs } = useContext(AnimalsContext);

  return (
    <div className="d-flex flex-wrap align-items-center justify-content-center gap-5 m-5">
      {dogs ? (
        dogs.map((dog) => (
          <div
            key={dog.id}
            className="card text-center"
            style={{ width: "18rem" }}
          >
            <img
              src="https://media.cnn.com/api/v1/images/stellar/prod/230412095218-02-shortest-dog.jpg?c=16x9&q=h_833,w_1480,c_fill"
              className="card-img-top"
              alt="dogImage"
            />
            <Link to={`/dogs/${dog.id}`}>
              <div className="card-body">
                <h2 className="card-title">{dog.name}</h2>
                <p className="card-text">{dog.breed}</p>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DogList;
