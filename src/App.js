import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import ImageDetails from "./components/ImageDetails";
import Header from "./components/Header";

function App() {
  return (<>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/image-detail" element={<ImageDetails />} />
    </Routes>
  </>)
}

export default App;
