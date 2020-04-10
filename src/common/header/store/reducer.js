/*
 * 1.reducer 作为纯函数，接受Action 和 State 作为参数，返回新的 State；
 * 2.这种 State 的计算过程叫做 Reducer.
 * 3.store.dispatch 方法会触发 Reducer 的自动执行。因此，Store 需要知道 Reducer 函数，
 * 我们需要在生成 Store 时，将 Reducer 传入 createStore 方法
 * 4.reducer 是纯函数，不能对state做任何修改啊！！！有确定输出，必须返回一个确定的值
 */
import { actionTypes } from './index'

const focusState = {
	focused: false,
};

const navState = {
	home: true,
	technology: false,
	project: false,
	photo: false
};

export const focusReducer = ( state = focusState, action) => {
	let result = {};
	switch (action.type) {
		case actionTypes.SEARCH_FOCUS:
			// 坑死了啊，reducer里千万别直接修改state，居然不报错，就是无法正常运行！！
			result = Object.assign({}, state, {
        focused: true
      });
			break;
		case actionTypes.SEARCH_BLUR:
			result = Object.assign({}, state, {
        focused: false
      });
			break;
		default:
			return state;
	}

  return result;
}

export const navActiveReducer = ( state = navState, action) => {
	let result = {};
	switch (action.type) {
		case actionTypes.NAV_ACTIVE_HOME:
			result = Object.assign({}, state, {
				home: true,
				technology: false,
				project: false,
				photo: false
			})
			break;
		case actionTypes.NAV_ACTIVE_TECHNOLOGY:
			result = Object.assign({}, state, {
				home: false,
				technology: true,
				project: false,
				photo: false
			})
			break;
		case actionTypes.NAV_ACTIVE_PROJECT:
			result = Object.assign({}, state, {
				home: false,
				technology: false,
				project: true,
				photo: false
			})
			break;
		case actionTypes.NAV_ACTIVE_PHOTO:
			result = Object.assign({}, state, {
				home: false,
				technology: false,
				project: false,
				photo: true
			})
			break;
		default:
			return state;
	}

	return result;
}