import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import UploadVideoComponent from "./components/Main/Upload/UploadVideoComponent";
import MainContainer from "./components/Main/MainContainer";
import TestPage from "./TestPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>
              <Navbar />
              <MainContainer 
              newsfeed= {true}/>
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
        <Route
          path="/LIVE" element={
            <>
              <Navbar />
              <MainContainer 
              newsfeed ={false}/>
            </>
          }
        />
          <Route path ="/test" element={<TestPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
