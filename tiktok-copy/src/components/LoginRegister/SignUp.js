import styles from "./Login.module.scss";
import {GrClose} from "react-icons/gr";
import {useDispatch} from "react-redux";
import DatePicker from "./DatePicker";
import tickSvg from "../../images/password_not_ok.380ea4fb.svg"
import {useState} from "react";

export default function SignUp(props){
    const dispatch = useDispatch();

    const [month, setMonth] = useState(0);
    const [day, setDay] = useState(0);
    const [year, setYear] = useState(0);
    const [isEligible, setEligibility] = useState(true);
    const [inputValues, setInputValues] = useState({
        username: '', password: '', rePassword: '',
        passwordsNotMatching: false
    });
    const [nextBtnState, nextBtnEnable] = useState(true);
    const [nextBtnStyle, nextBtnChangeStyle] = useState(styles.signUpBtn);
    const [showingTipsDialogue, showTips] = useState('none');
    const [showingPassWarning, showPassWarning] = useState('none');
    const [showingPassError, showPassError] = useState('none');

    const handleShowLoginWithEmail = () => {
        props.closingFunc();
        dispatch({type : 'SHOW_LOGIN'});
    }
    const showLoginDialog = () => {
        dispatch({type : 'SHOW_LOGIN'});
    }

    const showTipsDialogue = () => { //show tips how the password should look
        showTips('flex');
        showPassWarning('none');
        showPassError('none');
    }

    const checkIfNexBtnShouldBeEnabled = () => { //NextBtn should be enabled, if all of the fields are filled in
        if(inputValues.username &&  inputValues.password && inputValues.rePassword){
            if (nextBtnState){
                nextBtnEnable(!nextBtnState);
            }
                nextBtnChangeStyle(styles.signUpBtnEnabled);
        }
    }

    const checkBirthday = () => { //user must be above 13 yo, although info for the birthday is not stored
        function getAge(month, day, year) {
            let today = new Date();

            let age = today.getFullYear() - year;
            let m = today.getMonth()+ 1 - month;
            if (m < 0 || (m === 0 && (today.getDate() < day))) {
                age--;
            }
            return age;
        }
        if (getAge(month, day, year) < 13){
            setEligibility(!isEligible);
            return false;
        }else {
            return true;
        }
    }

    const handleUsernameChange = (input) => { //store the input of the user and check for the NextBtn
        setInputValues({...inputValues, username : input});
        checkIfNexBtnShouldBeEnabled();
    }

    const handlePasswordChange = (input) => { //store the input of the user and check for the NextBtn
        setInputValues({...inputValues, password : input});
        checkIfNexBtnShouldBeEnabled();
    }
    const handleRePasswordChange = (input) => { //store the input of the user and check for the NextBtn
        setInputValues({...inputValues, rePassword : input});
        checkIfNexBtnShouldBeEnabled();
    }

    const showPasswordNotMatchWarning = () => { //show error for not password & repass not matching
        showTips('none');
        showPassWarning('flex');
        showPassError('none');
    }
    const passwordNotGood = () => { //show error for not acceptable password
        showTips('none');
        showPassWarning('none');
        showPassError('flex');
    }

    const registerUser = () => {
        if(checkBirthday()){ //if above 13yo
            let userN = inputValues.username;
            let pass = inputValues.password;
            let rePass = inputValues.rePassword;

            let userData = {
                bio: "",
                iFollow: "empty",
                myVideos: "",
                nickname: userN,
                password: pass,
                picture: "https://firebasestorage.googleapis.com/v0/b/tiktok-635d3.appspot.com/o/empty_profile_picture.jpeg?alt=media&token=0240b2a9-4dad-44a0-bbda-f5aa14892a0d",
                username: userN
            }

            if(rePass === pass){
                const regularExp = /^(?=.*[0-9])(?=.*[-!@#$%^&*])[a-zA-Z0-9-!@#$%^&*]{8,20}$/;
                if (regularExp.test(pass)){ //if pass is acceptable, continue with actual registration
                    fetch('https://tiktok-635d3-default-rtdb.firebaseio.com/users.json', {
                        method: 'POST',
                        body: JSON.stringify(userData)
                    })
                        .then(res => res.json())
                        .then(data => data);
                    dispatch({type: 'LOGIN_AFTER_REGISTER',
                        payload: {picture: userData.picture, username: userN}});
                }else{
                    passwordNotGood();
                }

            }else{
                showPasswordNotMatchWarning();
            }
        }
    }

    return (
        <div className={styles.loginContainer}>
            <div className={styles.closeBtn} onClick={handleShowLoginWithEmail}><GrClose/></div>
            <div className={styles.loginContainerContent}>
                <div className={styles.loginTitle}>Sign up</div>
                <div className={styles.loginOptionsContainer}>
                    <div className={styles.signUpWrapper}>
                        <div style={{fontWeight: 600}}>When's your birthday?</div>
                        <div className={styles.signUpDateWrapper}>
                            <DatePicker checkAge={checkBirthday} onMonthChange={setMonth} onDayChange={setDay} onYearChange={setYear}/>
                        </div>
                        {isEligible ? (<div id={'birthdayWontBeShown'} className={styles.signUpSmallText}>
                                                Your birthday won't be shown publicly.</div>)
                                    : (<div id={'notEligibleForTikTok'} className={styles.signUpSmallText} style={{color:'#ff4c3a'}}>
                                                Sorry, looks like you're not eligible for TikTok... But thanks for checking us out!</div>)}
                        <div className={styles.signUpOpt}>
                            <div style={{fontWeight: 600}}>Username</div>
                            <div>Sign up with phone</div>
                        </div>
                        <input className={styles.singUpInput} placeholder={'Username'}
                               onChange={(ev) => handleUsernameChange(ev.target.value)} />
                        <input className={styles.singUpInput} placeholder={'Password'}
                               onChange={(ev) => handlePasswordChange(ev.target.value)}
                               onFocus={showTipsDialogue} onClick={showTipsDialogue} type={'password'}/>
                        <input className={styles.singUpInput} placeholder={'Repeat password'}
                               onChange={(ev) => handleRePasswordChange(ev.target.value)}
                               onFocus={showTipsDialogue} onClick={showTipsDialogue} type={'text'}/>
                        <div id={'tipsDialogue'} className={styles.signUpPasswordTip} style={{display:showingTipsDialogue}}>
                            <div style={{fontWeight:600, marginTop:4, marginBottom:0}}>Your Password must have:</div>
                            <div style={{color:'#8f9095'}}><img src={tickSvg} alt={'tick'}/>8 to 20 characters<br/>
                                <img src={tickSvg} alt={'tick'}/>Letters, numbers, and special characters</div>
                        </div>
                        <div id={'passwordsWarning'} className={styles.singUpPasswordsWarning} style={{display:showingPassWarning}}>
                            Password and Re-password do not match!</div>
                        <div id={'passwordsErrWarning'} className={styles.singUpPasswordsWarning} style={{display:showingPassError}}>
                            Password must contain letters, special characters and numbers</div>
                        <button id={'nextBtn'} className={nextBtnStyle} disabled={nextBtnState} onClick={registerUser}>Next</button>
                    </div>
                </div>
                <div className={styles.signUpFooter}>By continuing, you agree to TikTok's Terms of Service and confirm that you have read TikTok's Privacy Policy.</div>
            </div>
            <div className={styles.loginFooterContainer}>
                Already have and account? <a className={styles.signUpLink} href={'#'}  onClick={showLoginDialog}>Log in</a>
            </div>
        </div>
    )
}
