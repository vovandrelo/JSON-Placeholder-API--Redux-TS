import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { LOADING_STATUSES } from "../../../constans/loading-statuses"


export interface ITodos {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
}

export interface ITodosState {
    entities: {
        completed: {
            [propName: string]: ITodos,
        },
        notCompleted: {
            [propName: string]: ITodos,
        },
        
    },
    ids: number[],
    loadingStatus: LOADING_STATUSES,
}

const initialState: ITodosState = {
    entities: {
        completed: {},
        notCompleted: {},
    },
    ids: [],
    loadingStatus: LOADING_STATUSES.notStarted,
}

export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        startLoading: (state) => {
            state.loadingStatus = LOADING_STATUSES.inProgress;
        },
        successLoading: (state, action: PayloadAction<{ todos: ITodos[] }>) => {
            const todos = action.payload.todos;
            state.entities = todos.reduce((acc, item) => {
                item.completed ? acc.completed[item.id] = item : acc.notCompleted[item.id] = item;
                return acc;
            }, state.entities);
            state.ids = state.ids.concat(todos.map(({ id }) => id));
            state.loadingStatus = LOADING_STATUSES.success;
        },
        failedLoading: (state) => {
            state.loadingStatus = LOADING_STATUSES.failed;
        },
        movItem: (state, action: PayloadAction<{ id: number }>) => {
            const id = action.payload.id;            
            if (Object.keys(state.entities.completed).includes(String(id))) {
                const item = state.entities.completed[id];
                item.completed = !item.completed;
                delete state.entities.completed[id];
                state.entities.notCompleted[id] = item;
            } else {
                const item = state.entities.notCompleted[id];
                item.completed = !item.completed;
                delete state.entities.notCompleted[id];
                state.entities.completed[id] = item;
            }
        },
    }
})

export const todosActions = todosSlice.actions;