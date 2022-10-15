import SlideContainer from "../../containers/slide-container/SlideContainer";
import { ReactComponent as ArrowLeft } from "./arrow-left.svg";
import { ReactComponent as ArrowRight } from "./arrow-right.svg";

import { useState } from "react";

import style from "./slider.module.sass";

const Slider = (props: {albumName: string, photosIds: number[]}) => {
    const { albumName,  photosIds } = props;
    const [curSlide, setCurSlide] = useState(0);
    const slideWidth = 600;
    const maxSlide = photosIds.length-1;
    const minSlide = 0;

    const onLeft = () => {
        setCurSlide(curSlide => curSlide === minSlide ? curSlide : curSlide - 1)
    }

    const onRight = () => {
        setCurSlide(curSlide => curSlide === maxSlide ? curSlide : curSlide + 1)
    }

    return (
        <>
            <h2 className={style.title}>{albumName}</h2>
            <div className={style.slider}>
                <div className={style.window}>
                    <div className={style.items} style={{transform: `translateX(-${curSlide*slideWidth}px)`}}>
                        {photosIds.map(id => <SlideContainer key={id} photoId={id}/>)}
                    </div>
                    <div className={style.loading}>Loading...</div>
                    {curSlide === minSlide ? null : <ArrowLeft className={style.arrowLeft} onClick={onLeft}/>}
                    {curSlide === maxSlide ? null : <ArrowRight className={style.arrowRight} onClick={onRight}/>}
                </div>
            </div>
        </>
    )
}

export default Slider;