import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./layout/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
