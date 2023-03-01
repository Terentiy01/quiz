import { useNavigate } from 'react-router-dom'

export const Start = () => {
  const navigate = useNavigate()

  return (
    <div className="result">
      <h2>Начнём!</h2>
      <p>
        Нужно ответить на мои 10 вопросов, всё просто. Готов? Тогда приступай!
      </p>
      <button onClick={() => navigate('/quiz/game')}>Начать</button>
    </div>
  )
}
