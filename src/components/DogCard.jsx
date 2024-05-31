import { Link } from "react-router-dom";

function DogCard({ dog }) {
  return (
    <div key={dog.id} className="card text-center" style={{ width: "18rem" }}>
      <img
        src={dog.image}
        className="card-img-top"
        alt="dogImage"
        style={{ height: "25vh", objectFit: "cover" }}
      />
      <Link to={`/dogs/${dog.id}`}>
        <div className="card-body">
          <h2 className="card-title">{dog.name}</h2>
          <p className="card-text">{dog.breed}</p>
        </div>
      </Link>
    </div>
  );
}

export default DogCard;
