import { questions } from './Questions'
import { useNavigate } from 'react-router-dom'

export const Game = ({ step, question, correct, setStep, setCorrect }) => {
  const navigate = useNavigate()

  const procent = Math.round((step / questions.length) * 100)

  const onClickVariant = (index) => {
    setStep(step + 1)

    if (index === question.correct) {
      setCorrect(correct + 1)
    }
  }

  return (
    <>
      {step !== questions.length ? (
        <div>
          <div className="progress">
            <div style={{ width: `${procent}%` }} className="progress__inner" />
          </div>
          <h1>{question.title}</h1>
          <ul>
            {question.variants.map((text, index) => (
              <li onClick={() => onClickVariant(index)} key={text}>
                {text}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="result">
          <button onClick={() => navigate('/result')}>
            Посмотреть результат
          </button>
        </div>
      )}
    </>
  )
}
