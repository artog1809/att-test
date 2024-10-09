import { Btn } from './btn'
import { Search } from './search'
import './style.css'
import { useResize } from '../../use/useResize'

export const Header = () => {

    const {width} = useResize()

    const btns = [
        {id: 1, img: 'settings2'},
        {id: 2, img: 'notif'},
    ]

    const content = 
    width < 968 
    ?
    <>
        <div className="header-content">
            <img className='header-burger' src='public/icn/bruger.svg'/>
            <span className='header-left_text'>Settings</span>
            <img className='header-right_user-avatar' src={`public/img/avatar.png`}/>
            <div className='header-search'>
                <Search />
            </div>
        </div>
    </>
    :
    <div className='header-content'>
    <div className="header-left">
        <span className='header-left_text'>Settings</span>
    </div>
    <div className="header-right">
        <Search />
        {btns.map(el => <Btn key = {el.id} img = {el.img} />)}
        <img className='header-right_user-avatar' src={`public/img/avatar.png`}/>
    </div>
    </div>

    return (
        <div className='header'>
            {content}
        </div>
    )
}