import Navbar from "../Navbar/Navbar";
import constructionImg from "../../images/underconstructionpage.png";
import {Link} from "react-router-dom";
import Footer from "./Footer/Footer";
import './ErrorPage.css';

export default function UnderConstructionPage(){
    return (
        <>
            <Navbar/>
            <div className='errorPageContainer'>
                <img className='errorPagePicture' src={constructionImg} alt="Under Construction page"/>
                <Link to='/'>
                    <button className='btnUnderConstruction'>Watch now</button>
                </Link>
            </div>
            <Footer/>
        </>
    )
}