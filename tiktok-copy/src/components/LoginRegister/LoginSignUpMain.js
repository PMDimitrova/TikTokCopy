import {useSelector} from "react-redux";
import SignUp from "./SignUp";
import Login from "./Login";
import Register from "./Register";
import LoginWithEmail from "./LoginWithEmail";

export default function LoginSignUpMain(props){

    const showLogin = useSelector(state => state.singLoginData.showLogin);
    const showLoginOption = useSelector(state => state.singLoginData.showLoginOption);
    const showSingUp = useSelector(state => state.singLoginData.showSingUp);
    const showRegister = useSelector(state => state.singLoginData.showRegister);

    return (
        <>
            {showLogin ? <Login closingFunc={props.closingFunction}/> : <></>}
            {showLoginOption ? <LoginWithEmail closingFunc={props.closingFunction}/> : <></>}
            {showSingUp ? <SignUp closingFunc={props.closingFunction}/> : <></>}
            {showRegister ? <Register closingFunc={props.closingFunction}/> : <></>}
        </>
    )
}