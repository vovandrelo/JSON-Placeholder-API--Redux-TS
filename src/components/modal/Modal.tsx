import { TypedRemoveListener } from "@reduxjs/toolkit";
import { eventWrapper } from "@testing-library/user-event/dist/utils";
import { useNavigate } from "react-router-dom";
import { MouseEventHandler } from "react";

import style from "./style-modal.module.sass";

interface IProps {
    children: React.ReactNode
}

const Modal = (props: IProps) => {
    const { children } = props;
    const navigate = useNavigate();

    const onClickHandler = (event: React.MouseEvent) => {
        if (event.target == event.currentTarget) {
            navigate('/posts')
        }
    }

    return(
        <div className={style.modal} onClick={(event) => onClickHandler(event)}>
            <div className={style.modalContent}>
                {children}
            </div>
        </div>
    )
}

export default Modal;