import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div className="d-flex gap-5  justify-content-center align-items-center m-5">
      <Link to="/cats">
        <div className="card" style={{ width: "18rem", height: "16rem" }}>
          <img
            src="https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1"
            className="card-img-top"
            alt="cats"
            style={{ objectFit: "contain", height: "100%" }}
          />
          <div className="card-body text-center">
            <h3 className="card-title">See cats</h3>
          </div>
        </div>
      </Link>
      <Link to="/dogs">
        <div className="card" style={{ width: "18rem", height: "16rem" }}>
          <img
            src="https://www.rover.com/blog/wp-content/uploads/2017/01/petting-lab.jpg"
            className="card-img-top"
            alt="dogs"
            style={{
              objectFit: "contain",
              height: "100%",
            }}
          />
          <div className="card-body text-center">
            <h3 className="card-title">See dogs</h3>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default HomePage;
