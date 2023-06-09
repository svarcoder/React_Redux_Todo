import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./action";
import { todos } from "./state";

export const Reducer = (state = todos, action: any) => {
	switch (action.type) {
		case ADD_TODO:
			let addTodos = [...state];
			addTodos.push(action.payload);
			return addTodos;

		case EDIT_TODO:
			let editTodos = [...state];
			let index = -1;

			for (let i = 0; i < editTodos.length; i++) {
				index++;
				if (editTodos[i].id === action.payload.id) {
					break;
				}
			}
			if (index !== -1) {
				editTodos[index] = action.payload;
				return editTodos;
			}

			break;
		case DELETE_TODO:
			let newTodos = [...state];
			newTodos = newTodos.filter((item) => item.id !== action.payload);
			return newTodos;
	}

	return state;
};
