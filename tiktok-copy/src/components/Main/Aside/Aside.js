import './Aside.css';
import MainNavAside from './MainNavAside.js'
import AccountsNavAsideComp from './AccountsNavAsideComp';
import DiscoverHashtags from './DiscoverHashtags';
import FooterAside from './FooterAside.js';
import BigLoginBtn from './BigLoginBtn';
import {useSelector} from "react-redux";

export default function Aside(){
    const isLogged = useSelector(state => state.userData.logged);
    const currentPath = window.location.pathname;
    console.log(currentPath);
    const myProfilePath = '/path/to/myProfile'

    return (
        <div className='AsideContainer'>
            <div className='asideInsideContain'>
                <div className='asideInside'>
                    <MainNavAside/>

                    {!isLogged && <BigLoginBtn/>}
                    {/* {if(myProfilePath !== currentPath){
                        
                    }} */}
                    <AccountsNavAsideComp content={'suggestedAccounts'}
                        title={"Suggested accounts"}/>

                    {isLogged && <AccountsNavAsideComp content={'followedAccounts'}
                        title={"Following accounts"}/>}
                    <DiscoverHashtags/>
                    <FooterAside/>
                </div>
            </div>
        </div>
    )
}