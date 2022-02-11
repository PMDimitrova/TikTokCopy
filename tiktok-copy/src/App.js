import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import UploadVideoComponent from "./components/Main/Upload/UploadVideoComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}></Route>
        <Route
          path="/videoUpload" element={
            <>
              <Navbar />
              <UploadVideoComponent />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
