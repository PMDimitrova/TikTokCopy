import './Aside.css';
import MainNavAside from './MainNavAside.js'
import AccountsNavAsideComp from './AccountsNavAsideComp';
import DiscoverHashtags from './DiscoverHashtags';
import FooterAside from './FooterAside.js';
import BigLoginBtn from './BigLoginBtn';

export default function Aside(){
    let isLogged = false;
    let suggesteTitle = "Suggested accounts";
    let followingTitle = "Following accounts"
    return(
        <div className='AsideContainer'>
            <div className='asideInsideContain'>
                <div className='asideInside'>
                    <MainNavAside />
                    {!isLogged && <BigLoginBtn />}
                    <AccountsNavAsideComp 
                    title={suggesteTitle}/>
                    {isLogged && <AccountsNavAsideComp
                    title={followingTitle}/>}
                    <DiscoverHashtags />
                    <FooterAside/>
                </div>
            </div>
        </div>
    )
}