import { useContext } from "react";
import { AnimalsContext } from "../context/Animals.context";
import AddCatForm from "../components/AddCatForm";
import CatCard from "../components/CatCard";
function CatList() {
  const { cats } = useContext(AnimalsContext);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center m-5">
      <div>
        <AddCatForm />
      </div>
      <div className="d-flex  justify-content-center align-items-center flex-wrap gap-5 m-5">
        {" "}
        {cats ? cats.map((cat) => <CatCard cat={cat} />) : <p>Loading...</p>}
      </div>
    </div>
  );
}

export default CatList;
