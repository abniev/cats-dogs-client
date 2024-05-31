import { useContext } from "react";
import { AnimalsContext } from "../context/Animals.context";
import { Link } from "react-router-dom";
function CatList() {
  const { cats } = useContext(AnimalsContext);

  return (
    <div className="d-flex flex-wrap align-items-center justify-content-center gap-5 m-5">
      {cats ? (
        cats.map((cat) => (
          <div
            key={cat.id}
            className="card text-center"
            style={{ width: "18rem" }}
          >
            <img
              src="https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg"
              className="card-img-top"
              alt="catImage"
            />
            <Link to={`/cats/${cat.id}`}>
              <div className="card-body">
                <h2 className="card-title">{cat.name}</h2>
                <p className="card-text">{cat.breed}</p>
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

export default CatList;
