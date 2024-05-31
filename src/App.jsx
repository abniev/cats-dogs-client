import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import CatList from "./pages/CatList";
import DogList from "./pages/DogList";
import AnimalDetails from "./pages/AnimalDetails";
import NotFound from "./pages/NotFound";
import { Toaster } from "react-hot-toast";
import EditAnimal from "./pages/EditAnimal";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/cats" element={<CatList />} />
        <Route path="/dogs" element={<DogList />} />
        <Route path="/:animal/:animalId" element={<AnimalDetails />} />
        <Route path="/edit/:animal/:animalId" element={<EditAnimal />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
