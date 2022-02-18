import styles from './Footer.module.scss';
import FooterLink from "./FooterLink";
import noteLogo from '../../../images/footer-logo-note.svg';
import bigLogo from '../../../images/footer-logo.svg';

export default function Footer() {

    const companyLinkNames = ['About', 'Newsroom', 'Contact', 'Careers', 'ByteDance'];
    const programsLinkNames = ['TikTok for Good', 'Advertise', 'Developers', 'TikTok Rewards'];
    const supportLinkNames = ['Help Center', 'Safety Center', 'Creator Portal', 'Community Guidelines', 'Transparency', 'Accessibility'];
    const legalLinkNames = ['Terms of Use', 'Privacy Policy'];

    return (
        <>
            <div className={styles.footerContainer}>
                <div className={styles.footerWrapper}>
                    <div className={styles.footerLogo}>
                        <img src={noteLogo} alt={'tiktok-logo'} style={{marginRight:8}}/>
                        <img src={bigLogo} alt={'tiktok-logo'}/>
                    </div>
                    <div className={styles.footerLinksWrapper}>
                        <div className={styles.footerLinkgroupName}>Company</div>
                        {companyLinkNames.map(el=> <FooterLink key={el} name={el}/>)}
                    </div>
                    <div className={styles.footerLinksWrapper}>
                        <div className={styles.footerLinkgroupName}>Programs</div>
                        {programsLinkNames.map(el=> <FooterLink key={el} name={el}/>)}
                    </div>
                    <div className={styles.footerLinksWrapper}>
                        <div className={styles.footerLinkgroupName}>Support</div>
                        {supportLinkNames.map(el=> <FooterLink key={el} name={el}/>)}
                    </div>
                    <div className={styles.footerLinksWrapper}>
                        <div className={styles.footerLinkgroupName}>Legal</div>
                        {legalLinkNames.map(el=> <FooterLink key={el} name={el}/>)}
                    </div>
                </div>
            </div>
        </>
    )
}
