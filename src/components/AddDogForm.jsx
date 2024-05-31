import { useState, useContext } from "react";
import { AnimalsContext } from "../context/Animals.context";
function AddDogForm() {
  const [newDog, setNewDog] = useState({
    name: "",
    age: 0,
    breed: "",
    image: "",
  });

  const { handleAddDog } = useContext(AnimalsContext);

  const handleChange = (e) => {
    setNewDog((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#DogFormModal"
      >
        Add a dog to the list! 🐶
      </button>
      <div
        className="modal fade"
        id="DogFormModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
            </div>
            <div className="modal-body">
              <form
                onSubmit={(e) => handleAddDog(e, newDog, setNewDog)}
                id="DogForm"
              >
                <label>Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  className="form-control"
                  value={newDog.name}
                  onChange={handleChange}
                />
                <label>Breed</label>
                <input
                  name="breed"
                  type="text"
                  required
                  className="form-control"
                  value={newDog.breed}
                  onChange={handleChange}
                />
                <label>Age</label>
                <input
                  name="age"
                  type="number"
                  required
                  className="form-control"
                  value={newDog.age}
                  onChange={handleChange}
                />
                <label>Image (URL)</label>
                <input
                  name="image"
                  type="url"
                  required
                  className="form-control"
                  value={newDog.image}
                  onChange={handleChange}
                />
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary" form="DogForm">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddDogForm;
