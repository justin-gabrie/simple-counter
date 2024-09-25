import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reset } from './redux/counterSlice'
import minusIcon from "./assets/minus.png"
import plusIcon from "./assets/plus.png"
import resetIcon from "./assets/reset.png"
import './App.css'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  const handleDecrement = () => {
    dispatch(decrement())
  }
  const handleIncrement = () => {
    dispatch(increment())
  }
  const handleReset = () => {
    dispatch(reset())
  }

  return (
    <div className='container'>
      <div className='reset-wrapper'>
        <img src={resetIcon} height='23px' onClick={() => handleReset()} />
      </div>
      <div className='count-wrapper'>
        <img src={minusIcon} onClick={() => handleDecrement()} />
        <p className='count'>{count}</p>
        <img src={plusIcon} onClick={() => handleIncrement()}/>
      </div>
    </div>
  )
}

export default App
