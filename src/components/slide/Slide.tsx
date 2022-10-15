import style from "./style-slide.module.sass";

const Slide = (props: { title: string, img: string }) => {
    const { title, img } = props;
    return(
        <div className={style.slide}>
            <span className={style.title}>{title.length > 55 ? `${title.slice(0,55)}...` : title}</span>
            <img src={img} alt="" />
        </div>
    )
}

export default Slide;