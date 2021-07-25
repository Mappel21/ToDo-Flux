const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			todoList: []
		},
		actions: {
			addTodo: todo => {
				let newItem = getStore().todoList;
				setStore({ todoList: [...newItem, todo] });
			},
			deleteItem: delItem => {
				setStore({ todoList: delItem });
			}
		}
	};
};

export default getState;
