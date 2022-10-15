import style from "./footer-style.module.sass";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.company}><span>VoV</span> production for СОФТ ПРОЕКТ</div>
            <div className={style.contacts}>vovandrelo@gmail.com</div>
        </footer>
    )
}

export default Footer;