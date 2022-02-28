import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import UploadVideoComponent from "./components/Main/Upload/UploadVideoComponent";
import MainContainer from "./components/Main/MainContainer";
import ErrorPage from './components/Main/ErrorPage'
import UnderConstructionPage from "./components/Main/UnderConstructionPage";
import ProfilePage from './components/ProfilePage/ProfilePage'

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
            <ProfilePage/>
          </>
          }
        />
        <Route path='/userProfile' element={
          <>
            <Navbar />
            <ProfilePage />
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
        <Route path ="/underconstruction" element={<UnderConstructionPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
