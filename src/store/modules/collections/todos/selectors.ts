import { IRootState } from "../../..";

export const selectTodosModuleState = (state: IRootState) => state.collections.todos;
export const selectTodosIds = (state: IRootState) => selectTodosModuleState(state)?.ids;
export const selectTodosEntities = (state: IRootState) => selectTodosModuleState(state)?.entities;
export const selectCompletedTodosById = (state: IRootState, todosId: number) => selectTodosModuleState(state)?.entities?.completed?.[todosId];
export const selectNotCompletedTodosById = (state: IRootState, todosId: number) => selectTodosModuleState(state)?.entities?.notCompleted?.[todosId];
export const selectTodosLoadingStatus = (state: IRootState) => selectTodosModuleState(state)?.loadingStatus;