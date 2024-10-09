import { Btn } from './btn'
import { Search } from './search'
import './style.css'


export const Header = () => {

    const btns = [
        {id: 1, img: 'settings2'},
        {id: 2, img: 'notif'},
    ]

    return (
        <div className='header'>
            <div className="header-content">
                <div className="header-left">
                    <span className='header-left_text'>Settings</span>
                </div>
                <div className="header-right">
                    <Search />
                    {btns.map(el => <Btn key = {el.id} img = {el.img} />)}
                    <div className="header-right_user">
                        <img className='header-right_user-avatar' src={`public/img/avatar.png`}/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}