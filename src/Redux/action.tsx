export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const addTodo = (todo: any) => {
	return {
		type: ADD_TODO,
		payload: todo,
	};
};
export const editTodo = (todo: string) => {
	return {
		type: EDIT_TODO,
		payload: todo,
	};
};
export const deleteTodo = (todoId: number) => {
	return {
		type: DELETE_TODO,
		payload: todoId,
	};
};
