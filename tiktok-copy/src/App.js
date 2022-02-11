import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import UploadVideoComponent from "./components/UploadVideoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
        </Route>
        <Route path="/videoUpload" element={<UploadVideoComponent />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
