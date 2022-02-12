import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import UploadVideoComponent from "./components/Main/Upload/UploadVideoComponent";
import MainContainer from "./components/Main/MainContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>
              <Navbar />
              <MainContainer />
            </>
          }/>

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
