import { NavElem } from "./nav-elem"


export const Nav = () => {

    const els = [
        {id:'0', img: "home", text: 'Dashboard'},
        {id:'1', img: "transfer", text: 'Transactions'}, 
        {id:'2', img: "user", text: 'Accounts'},
        {id:'3', img: "invest", text: 'Investments'}, 
        {id:'4', img: "credit-card2", text: 'Credit Cards'},
        {id:'5', img: "loan", text: 'Loans'},
        {id:'6', img: "service", text: 'Services'},
        {id:'7', img: "econometrics", text: 'My Privileges'}, 
        {id:'8', img: "settings", text: 'Settings'}, 
    ]
    return(
        <div className="side-menu-nav">
            {els.map(el => {
                return <NavElem key={el.id} img = {el.img} text = {el.text} />
            })}
        </div>
    )
}