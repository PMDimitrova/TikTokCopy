import errorIcon from '../../images/tiktok-error-page.PNG';
import Footer from "../Main/Footer/Footer";
import './ErrorPage.css';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

export default function ErrorPage(){
    return(
        <>
        <Navbar/>
        <div className='containerErrorPageImgBtn'>
            <img className='errorPagePicture' src={errorIcon} alt="Error page">
            </img>
            <Link to='/'>
                <button className='btnErrorPage'>Watch now</button>
            </Link>
        </div>
        <Footer/>
        </>
    )
}