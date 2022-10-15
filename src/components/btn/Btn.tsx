import { EventType } from "@testing-library/react";
import style from "./style-btn.module.sass";
import { MouseEventHandler } from "react";

interface IProps {
    text: string,
    width: string,
    handler: MouseEventHandler<HTMLButtonElement> | undefined,
    type: "button" | "submit" | "reset" | undefined,
}


const Btn = (props: IProps) => {
    const { text, width, handler, type } = props;
    return <button type={type} style={{width}} onClick={handler} className={style.btn}>{text}</button>
}

export default Btn;