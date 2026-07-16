export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

type IncrementAction = { type: typeof INCREMENT };
type DecrementAction = { type: typeof DECREMENT };
type ResetAction = { type: typeof RESET };

type CounterAction = IncrementAction | DecrementAction | ResetAction;

const initialState = { count: 0 };

export const CounterReducer = (state = initialState, action: CounterAction) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export const increment = (): IncrementAction => ({ type: INCREMENT });
export const decrement = (): DecrementAction => ({ type: DECREMENT });
export const reset = (): ResetAction => ({ type: RESET });