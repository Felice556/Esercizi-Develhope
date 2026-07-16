import { useAppSelector, useAppDispatch } from './store';
import { increment, decrement, reset } from './CounterSlice';
import { RootState } from './store';

function ReduxCounter() {
 const count = useAppSelector((state: RootState) => state.counter.count);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default ReduxCounter;