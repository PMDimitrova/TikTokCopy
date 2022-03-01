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
    const myProfilePath = '/myProfile'

    return (
        <div className='AsideContainer'>
            <div className='asideInsideContain'>
                <div className='asideInside'>
    {/* 3 MAIN BTNS */}
                    <MainNavAside/>
    {/* SUGGESTED ACCOUNTS */}
                    {!isLogged && <BigLoginBtn/>}
                    {isLogged ?
                        ((myProfilePath !== currentPath) ?
                        (<AccountsNavAsideComp content={'suggestedAccounts'}
                                              title={"Suggested accounts"}/> )
                        :(<></>))
                        : (<AccountsNavAsideComp content={'suggestedAccounts'}
                                                 title={"Suggested accounts"}/>)
                    }
    {/* FOLLOWING ACCOUNTS */}
                    {isLogged && <AccountsNavAsideComp content={'followedAccounts'}
                        title={"Following accounts"}/>}
    {/* HASHTAGS */}
                    <DiscoverHashtags/>
    {/* FOOTER */}
                    <FooterAside/>
                </div>
            </div>
        </div>
    )
}