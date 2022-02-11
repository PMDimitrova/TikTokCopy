import style from "./LoginOption.module.scss";

export default function LoginOption(props){
    return(
        <div className={style.loginOptionItem}>
            <div className={style.loginIconOption}>{props.icon}</div>
            <div className={style.loginTextWrapper}>{props.text}</div>
        </div>
    )
}