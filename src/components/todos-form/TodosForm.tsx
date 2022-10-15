import React, { useState } from "react";
import Btn from "../btn/Btn";

import style from "./style-todos-form.module.sass";



interface IProps {
    createTodos: (
        e: React.FormEvent,
        newTodosItem: {
            title: string,
            completed: boolean
        }) => void 
}

const TodosForm = (props: IProps) => {
    const { createTodos } = props;
    const [titleValue, setTitleValue] = useState("");
    const [ratioValue, setRatioValue] = useState("completed");

    const onSubmitHandler = (e: React.FormEvent) => {
        createTodos(e, {title: titleValue, completed: ratioValue === "completed" ? true : false})
        setTitleValue("")
        setRatioValue("completed")
    }
    
    return (
        <form className={style.form} onSubmit={onSubmitHandler}>
            <p className={style.inputBlock}>
                <label htmlFor="title">Title</label>
                <input
                    value={titleValue}
                    onChange={e => setTitleValue(e.target.value)}
                    type="text"
                    name="title"
                    id="title"/>
            </p>
            <p className={style.inputBlock}> 
                <label htmlFor="completed"></label>
                <input
                    checked={ratioValue === "completed" ? true : false}
                    onChange={e => setRatioValue(e.target.value)}
                    value="completed"
                    type="radio"
                    name="complete"
                    id="completed"/>
                    Completed
            </p>
            <p className={style.inputBlock}>
                <label htmlFor="notCompleted"></label>
                <input
                    checked={ratioValue === "notCompleted" ? true : false}
                    onChange={e => setRatioValue(e.target.value)}
                    value="notCompleted"
                    type="radio"
                    name="complete"
                    id="notCompleted"/>
                    Not completed
            </p>
            <Btn text={"Add"} width="200px" type = "submit" handler={undefined}/>
        </form>
    )
}

export default TodosForm;