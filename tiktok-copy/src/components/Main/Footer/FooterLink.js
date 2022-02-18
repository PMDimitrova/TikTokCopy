import styles from "./Footer.module.scss";

export default function FooterLink(props) {
    return (
        <>
            <a href={'#'} className={styles.footerLink}>{props.name}</a>
        </>
    )
}
