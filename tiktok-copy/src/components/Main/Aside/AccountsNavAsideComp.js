import AccountAsideCard from './AccountAsideCard.js'

export default function AccountsNavAsideComp(props){
    return(
        <div className="SuggestedAccountsNavAside">
            <p className="SuggestedAccountsNavText">{props.title}</p>
            <AccountAsideCard pplToShow={props.people}/>
            <div className='seeAllContainer'>
                <p className='seeAllText'>See all</p>
            </div>
        </div>
    )
}