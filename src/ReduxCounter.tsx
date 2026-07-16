import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './CounterSlice';
import { RootState } from './store';

function ReduxCounter() {
 const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

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