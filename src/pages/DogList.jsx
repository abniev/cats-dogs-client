import { useContext } from "react";
import { AnimalsContext } from "../context/Animals.context";
import DogCard from "../components/DogCard";
import AddDogForm from "../components/AddDogForm";
function DogList() {
  const { dogs } = useContext(AnimalsContext);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center m-5">
      <div>
        <AddDogForm />
      </div>
      <div className="d-flex  justify-content-center align-items-center flex-wrap gap-5 m-5">
        {" "}
        {dogs ? dogs.map((dog) => <DogCard dog={dog} />) : <p>Loading...</p>}
      </div>
    </div>
  );
}

export default DogList;
