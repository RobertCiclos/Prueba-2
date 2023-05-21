import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './app/slices/counter/counter.slice';
import { RootState } from './app/store';

const App = () => {
  console.log(import.meta.env.VITE_API_KEY)
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default App
