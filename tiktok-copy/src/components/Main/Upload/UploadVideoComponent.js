import './UploadVideoComponent.css';
import Login from "../../LoginRegister/Login";
import LoginWithEmail from "../../LoginRegister/LoginWithEmail";
import Register from "../../LoginRegister/Register";
import SignUp from "../../LoginRegister/SignUp";

export default function UploadVideoComponent(){
    return(
        <>
            <div className='uploadVideoComponentContainer'> This is video</div>
            <SignUp />
            <Register/>
            <Login />
            <LoginWithEmail />
        </>
    )
}