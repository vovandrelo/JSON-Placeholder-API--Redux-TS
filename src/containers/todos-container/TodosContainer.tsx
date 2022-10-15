import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useState, useEffect } from "react";

import { selectTodosLoadingStatus, selectTodosEntities } from "../../store/modules/collections/todos/selectors";

import { LOADING_STATUSES } from "../../store/constans/loading-statuses";
import { todosActions } from "../../store/modules/collections/todos";
import { loadTodosIfNotExistThunk } from "../../store/modules/collections/todos/middlewares/loadTodosIfNotExistThunk";
import { updateTodosThunk } from "../../store/modules/collections/todos/middlewares/updateTodosThunk";
import { createTodosTunk } from "../../store/modules/collections/todos/middlewares/createTodosTunk";

import TodosForm from "../../components/todos-form/TodosForm";
import Btn from "../../components/btn/Btn";
import Spinner from "../../components/spinner/Spinner";
import Error from "../../components/error/Error";
import Todos from "../../components/todos/Todos";

const TodosContainer = () => {
    const loadingStatus = useAppSelector(selectTodosLoadingStatus);
    const todos = useAppSelector(selectTodosEntities);
    const dispatch = useAppDispatch();

    const [changedIds, setChangedIds] = useState<number[]>([]);

    useEffect(() => {
        dispatch(loadTodosIfNotExistThunk())
    }, [])

    if (!loadingStatus || !todos) {
        return <Error/>
    }

    const editTodos = (e: React.DragEvent, curId: number) => {
        e.preventDefault();
        const currentTarget = e.currentTarget as HTMLDivElement;

        // Получение целевой доски:
        const targetBoard = currentTarget.dataset.boardType as "completed" | "notCompleted";
        
        // Если элемент был перемещён в другую доску, а не в свою же, то:
        if (!Object.keys(todos[targetBoard]).includes(String(curId))) {
            // Если данный id уже подвергался изменению, то удаляем его из списка id с изменениями:
            if (changedIds.includes(curId)) {
                setChangedIds(curIds => curIds.filter(id => id !== curId));
            // Если данный id ещё не подвергался изменению, то добавляем его в список id с изменениями:
            } else {
                setChangedIds(curIds => [...curIds, curId]);
            }
            // Перемещаем элемент на необходимую доску:
            dispatch(todosActions.movItem({id: curId}))
        }
    }

    const createTodos = (e: React.FormEvent, newTodosItem: { title: string, completed: boolean }) => {
        e.preventDefault();
        dispatch(createTodosTunk({...newTodosItem, userId: 1}))
    }

    const saveData = () => {
        dispatch(updateTodosThunk(changedIds))
        setChangedIds([])
    }

    const contentRender = () => {
        let content = null;

        if (loadingStatus === LOADING_STATUSES.notStarted) {
            content = null;
        } else if (loadingStatus === LOADING_STATUSES.inProgress) {
            content = <Spinner/>;
        } else if (loadingStatus === LOADING_STATUSES.failed) {
            content = <Error/>;
        } else {
            content = (
                <>
                    <Todos todos={todos} editTodos={editTodos}/>
                    <Btn text={"Save"} width="200px" handler={saveData} type={undefined}/>
                </>
            )     
        }

        return content;
    }

    


    return (
        <>
            <TodosForm createTodos={createTodos} />
            {contentRender()}
        </> 
    )   
}

export default TodosContainer;