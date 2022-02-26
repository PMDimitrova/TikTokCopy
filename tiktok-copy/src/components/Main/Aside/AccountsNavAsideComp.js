import AccountAsideCard from './AccountAsideCard.js'
import {Link} from "react-router-dom";

export default function AccountsNavAsideComp(props){

    return(
        <div className="SuggestedAccountsNavAside">
            <p className="SuggestedAccountsNavText">{props.title}</p>
            <AccountAsideCard content={props.content}/>
            <div className='seeAllContainer'>
                <Link className='seeAllText' to={'/underconstruction'}>See all</Link>
            </div>
        </div>
    )
}