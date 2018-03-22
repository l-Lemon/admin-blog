import { query as queryUsers, queryCurrent, userDetail } from '../services/user';

export default {
  namespace: 'user',

  state: {
    list: [],
    currentUser: {},

  },

  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(userDetail);
      yield put({
        type: 'save',
        payload: response,
      });
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
  },
};
