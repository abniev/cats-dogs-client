import { useContext } from "react";
import { AnimalsContext } from "../context/Animals.context";
import { Link } from "react-router-dom";
import DogCard from "../components/DogCard";
function DogList() {
  const { dogs } = useContext(AnimalsContext);

  return (
    <div className="d-flex flex-wrap align-items-center justify-content-center gap-5 m-5">
      {dogs ? dogs.map((dog) => <DogCard dog={dog} />) : <p>Loading...</p>}
    </div>
  );
}

export default DogList;
