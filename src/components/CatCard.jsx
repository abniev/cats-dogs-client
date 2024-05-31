import { Link } from "react-router-dom";
function CatCard({ cat }) {
  return (
    <div key={cat.id} className="card text-center" style={{ width: "18rem" }}>
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
  );
}

export default CatCard;
