import classNames from "classnames";
import style from "./header-style.module.sass";
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <header className={style.header}>
            <nav className={style.navigate}>
                <NavLink to="/posts" className={({isActive}) => classNames(style.item, {[style.active]: isActive})}>Posts</NavLink>
                <NavLink to="/albums" className={({isActive}) => classNames(style.item, {[style.active]: isActive})}>Albums</NavLink>
                <NavLink to="/todos" className={({isActive}) => classNames(style.item, {[style.active]: isActive})}>Todos</NavLink>
            </nav>
        </header>
    )
}

export default Menu;