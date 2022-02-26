import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import UploadVideoComponent from "./components/Main/Upload/UploadVideoComponent";
import MainContainer from "./components/Main/MainContainer";
import TestPage from "./TestPage";
import { useDispatch, useSelector } from "react-redux";
import ErrorPage from './components/Main/ErrorPage'
import UnderConstructionPage from "./components/Main/UnderConstructionPage";
import MyProfile from './components/ProfilePage/MyProfile'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <MainContainer 
            newsfeed= {true}/>
          </>
          }
        />
        <Route path="/videoUpload" element={
          <>
            <Navbar />
            <UploadVideoComponent />
          </>
          }
        />
        <Route path="/LIVE" element={
          <>
            <Navbar />
            <MainContainer 
            newsfeed ={false}/>
          </>
          }
        />
        <Route path='/myProfile' element={
          <>
            <Navbar />
            <MyProfile/>
          </>
          }
        />
        <Route path='/following' element={
          <>
            <Navbar />
            <MainContainer
            newsfeed= {false}
            followingAccounts={true}/>
          </>
          }
        />
        <Route path ="/test" element={<TestPage/>}/>
        <Route path ="/underconstruction" element={<UnderConstructionPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
