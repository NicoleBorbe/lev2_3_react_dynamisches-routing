import { BrowserRouter, Routes, Route } from "react-router-dom";
import Car from "./Pages/Car";
import Home from "./Pages/Home";
import './App.css';
import Header from "./Components/Header";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/cars/:id" element={<Car />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
