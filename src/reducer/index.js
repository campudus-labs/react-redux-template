import Immutable from 'immutable';

const initialState = Immutable.Map({
  greeting : '...'
});

export const ActionTypes = {
  'SAY_HELLO' : 'SAY_HELLO',
  'SAY_WELCOME' : 'SAY_WELCOME'
};

const reducerMap = {
  [ActionTypes.SAY_HELLO] : (state, data) => state.update('greeting', () => `Hello ${data.name}`),
  [ActionTypes.SAY_WELCOME] : (state, data) => state.update('greeting', () => `Welcome ${data.name}`)
};

const reducer = (state = initialState, action) => {
  if (!action) {
    return state;
  }
  const actionFn = reducerMap[action.type];
  if (actionFn) {
    return actionFn(state, action);
  } else {
    return state;
  }
};

export default reducer;
