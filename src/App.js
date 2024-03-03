import "./App.css";
import Home from "./Pages/Home";
import Add from "./Pages/Add";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from "./Pages/Update";
import BookDetails from "./Pages/BookDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element=<Home /> />
          <Route path="/addBook" element=<Add /> />
          <Route path="/update/:id" element=<Update /> />
          <Route path="/details/:id" element=<BookDetails /> />
         
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
