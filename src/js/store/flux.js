const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			todoList: []
		},
		actions: {
			addTodo: () => {}
		}
	};
};

export default getState;
