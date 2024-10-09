
import { Header } from './header'
import { Nav } from './nav'
import './style.css'

import { useResize } from '../../use/useResize'

export const Sidemenu = () => {

    const {width} = useResize();

    if(width < 968) return null;
    return (
        <div className = 'side-menu'>
            <Header />
            <Nav />
        </div>
    )
}
