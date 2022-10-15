import React, { useState } from "react";
import style from "./style-post-form.module.sass";

interface IProps {
    inputValue: string,
    textareaValue: string,
    saveData: (post: { title: string, body: string }) => void,
}

const PostForm = (props: IProps) => {
    const { saveData, inputValue, textareaValue } = props;
    const [titleValue, setTitleValue] = useState(inputValue);
    const [descrValue, setDescrValue] = useState(textareaValue);

    const onSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        saveData({title: titleValue, body: descrValue})
    }

    return (
        <form className={style.form} onSubmit={event => onSubmitHandler(event)}>
            <fieldset>
                <legend className={style.title}>Post</legend>
                <p className={style.inputBlock}>
                    <label className={style.inputDescr} htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        onChange={event => setTitleValue(event.target.value)}
                        value={titleValue}/>                            
                </p>
                <p className={style.inputBlock}>
                    <label className={style.inputDescr} htmlFor="descr">Description</label>
                    <textarea
                        name="descr"
                        id="descr"
                        onChange={event => setDescrValue(event.target.value)}
                        value={descrValue}/>
                </p>
            </fieldset>
            <button type="submit" className={style.btn}>Save</button>
        </form>
    )
}

export default PostForm;