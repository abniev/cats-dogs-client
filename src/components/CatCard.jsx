import { Link } from "react-router-dom";
function CatCard({ cat }) {
  return (
    <div key={cat.id} className="card text-center" style={{ width: "18rem" }}>
      <img
        src={cat.image}
        className="card-img-top"
        alt="catImage"
        style={{ height: "25vh", objectFit: "cover" }}
      />
      <Link to={`/cats/${cat.id}`}>
        <div className="card-body">
          <h2 className="card-title">{cat.name}</h2>
          <p className="card-text">{cat.breed}</p>
        </div>
      </Link>
    </div>
  );
}

export default CatCard;
