import { useState } from "react";
import { ITodos } from "../../store/modules/collections/todos";

import style from "./style-todos.module.sass";

interface ITodosEntities {
    completed: {
        [propName: string]: ITodos,
    },
    notCompleted: {
        [propName: string]: ITodos,
    },
}

interface IProps {
    todos: ITodosEntities,
    editTodos: (e: React.DragEvent, curId: number) => void,
}

const Todos = (props: IProps) => {
    const { todos, editTodos } = props;

    const [curId, setCurId] = useState(0);    

    const dragStartHandler = (e: React.DragEvent, itemId: number) => {
        const target = e.target as HTMLDivElement;
        target.style.border = "2px solid rgb(23, 218, 162)";
        setCurId(itemId)
    }

    const dragLeaveHandler = (e: React.DragEvent) => {
        const target = e.target as HTMLDivElement;
        target.style.border = "none"
    }

    const dragEndHandler = (e: React.DragEvent) => {
        const target = e.target as HTMLDivElement;
        target.style.border = "none"
    }

    return (
        <div className={style.todos}>
            <div className={style.boards}>
                <div
                    className={style.board}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => editTodos(e, curId)}
                    onDragLeave={(e) => dragLeaveHandler(e)}
                    data-board-type="completed">
                    <div className={style.title}>Completed</div>
                    {Object.keys(todos.completed).map(itemId =>
                        <div
                            key={itemId}
                            className={style.item}
                            draggable={true}
                            onDragStart={(e) => dragStartHandler(e, +itemId)}
                            onDragEnd={(e) => dragEndHandler(e)}>
                            {todos.completed[itemId].title}
                        </div>
                    )}
                </div>
                <div
                    className={style.board}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => editTodos(e, curId)}
                    onDragLeave={(e) => dragLeaveHandler(e)}
                    data-board-type="notCompleted">
                    <div className={style.title}>Not completed</div>
                    {Object.keys(todos.notCompleted).map(itemId =>
                        <div
                            key={itemId}
                            className={style.item}
                            draggable={true}
                            onDragStart={(e) => dragStartHandler(e, +itemId)}
                            onDragEnd={(e) => dragEndHandler(e)}>
                            {todos.notCompleted[itemId].title}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Todos;