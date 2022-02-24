import AccountAsideCard from './AccountAsideCard.js'

export default function AccountsNavAsideComp(props){
    // console.log(props.people.map(per => console.log(per)))

    return(
        <div className="SuggestedAccountsNavAside">
            <p className="SuggestedAccountsNavText">{props.title}</p>
            {/*<AccountAsideCard pplToShow={props.people}/>*/}
            <AccountAsideCard/>
            <div className='seeAllContainer'>
                <p className='seeAllText'>See all</p>
            </div>
        </div>
    )
}