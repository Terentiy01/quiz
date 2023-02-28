import { useNavigate } from 'react-router-dom'
import { questions } from './Questions'

export const Result = ({ correct, setCorrect, setStep }) => {
  const navigate = useNavigate()

  const finish = () => {
    setStep(0)
    setCorrect(0)
    navigate('/')
  }

  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        Вы отгадали {correct} из {questions.length} вопросов.
      </h2>
      <button onClick={() => finish()}>Попробовать снова</button>
    </div>
  )
}
