// action 的生成器，用于生成 action
export const actionCreator = (actionType, dispatch) => {
	return () => {
		const action = {
			type: actionType,
		};
		dispatch(action);
	}
}

