import { combineReducers } from 'redux';

const defaultState = {
  error: null,
  data: null,
  loading: null,
};

export const actionTypes = {
  DATA: {
    REQUEST: 'DATA_FETCH_REQUEST',
    SUCCESS: 'DATA_FETCH_SUCCESS',
    FAIL: 'DATA_FETCH_FAIL',
  }
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.DATA.REQUEST: {

      return {
        ...state,
        loading: true,
      };
    }
    case actionTypes.DATA.SUCCESS: {
      const reduced = action.data.reduce((acc, curr) => {
        const key = curr.name[0];

        if (!Number.isNaN(Number(key))) {
          return acc;
        }

        return { ...acc, [key]: [...(acc[key] ? [...acc[key], curr] : [curr])] };
      }, {});

      return {
        ...state,
        loading: false,
        data: Object.entries(reduced).sort(([key1], [key2]) => {
          if (key1 > key2) return 1;
          if (key1 < key2) return -1;
          return 0;
        }),
      };
    }
    case actionTypes.DATA.FAIL: {

      return {
        ...state,
        loading: false,
        error: action.message,
      };
    }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  reducer,
});

export default rootReducer;
