import logo from '../images/TikToklogo.jpg';
import search from '../images/tiktok-search-icon.PNG';
import NotLogBntsNav from './NotLogBntsNav';
import LogBtnsNav from './LogBtnsNav.js';
import './Navbar.css';

export default function Navbar() {
    let isLogged = true;
    return (
        <div className="navbar">
            <div className='navWrapper'>
                <div>
                    <img className='logoButtonNav' src={logo} alt='TikTokLogo'></img>
                </div>
                <div className='searchContainer'>
                    <form className='formSearch'>
                        <input className='searchInput' tupe='text' placeholder={isLogged? 'Search accounts and videos' : 'Search accounts'}></input>
                        <span className='spanSpliter'></span>
                        <button className='searchButton' type='submit'>
                            <img src={search} alt='Search Icon Logo'></img>
                        </button>
                    </form>
                </div>
                {isLogged? <LogBtnsNav/> : <NotLogBntsNav/>}
            </div>
        </div>
    );
}
