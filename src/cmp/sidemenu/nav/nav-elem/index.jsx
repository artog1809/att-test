

export const NavElem = ({img, text}) => {
    return (
        <div className = "side-menu-nav_nav-elem">
            <span><img src = {`/icn/${img}.svg`} /></span>
            <span>{text}</span>
        </div>
    )
}