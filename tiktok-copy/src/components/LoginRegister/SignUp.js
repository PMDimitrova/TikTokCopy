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
        username: '', password: '', codeBtnRelease: true, code: ''
    });

    const handleShowLoginWithEmail = () => {
        props.closingFunc();
        dispatch({type : 'SHOW_LOGIN'});
    }
    const showLoginDialog = () => {
        dispatch({type : 'SHOW_LOGIN'});
    }

    const showTipsDialogue = () => {
        document.getElementById('tipsDialogue').style.display = 'flex';
    }

    const checkBirthday = () => {
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

    const checkForCodeBtnRelease = () => {
        console.log(inputValues.username + inputValues.password)
      if (inputValues.username && inputValues.password){
          setInputValues({...inputValues, codeBtnRelease : true});
      }
    }

    const handleUsernameChange = (input) => {
        setInputValues({...inputValues, username : input});
        checkForCodeBtnRelease();
    }

    const handlePasswordChange = (input) => {
        setInputValues({...inputValues, password : input});
        checkForCodeBtnRelease();
    }
    const handleCodeChange = (input) => {
        setInputValues({...inputValues, code : input});
    }

    const registerUser = () => {
        if(checkBirthday()){ //if above 13yo
            let userN = inputValues.username;
            let pass = inputValues.password;

            let userData = {
                bio: "",
                iFollow: "empty",
                myVideos: "",
                nickname: userN,
                password: pass,
                picture: "",
                username: userN
            }

            fetch('https://tiktok-635d3-default-rtdb.firebaseio.com/users.json', {
                method: 'POST',
                body: JSON.stringify(userData)
            })
                .then(res => res.json())
                .then(data => console.log(data));
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
                               onFocus={showTipsDialogue} onClick={showTipsDialogue} type={'text'}/>
                        <div id={'tipsDialogue'} className={styles.signUpPasswordTip}>
                            <div style={{fontWeight:600, marginTop:4, marginBottom:0}}>Your Password must have:</div>
                            <div style={{color:'#8f9095'}}><img src={tickSvg} alt={'tick'}/>8 to 20 characters<br/>
                                <img src={tickSvg} alt={'tick'}/>Letters, numbers, and special characters</div>
                        </div>
                        <div className={styles.singUpCodeWrapper}>
                            <input className={styles.singUpCode} placeholder={'Enter 6-digit code //123456'}
                                   onChange={(ev) => handleCodeChange(ev.target.value)}/>
                            {/*<div className={styles.signUpSendCode}*/}
                                 {/*>Send code</div>*/}
                            <button className={styles.signUpSendCode} disabled={inputValues.codeBtnRelease}>Send code</button>
                        </div>
                        <button className={styles.signUpBtn} onClick={registerUser}>Next</button>
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