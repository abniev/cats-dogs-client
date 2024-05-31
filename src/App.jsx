import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import CatList from "./pages/CatList";
import DogList from "./pages/DogList";
import AnimalDetails from "./pages/AnimalDetails";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/cats" element={<CatList />} />
        <Route path="/dogs" element={<DogList />} />
        <Route path="/:animal/:animalId" element={<AnimalDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
