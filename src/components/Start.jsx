import { useNavigate } from 'react-router-dom'

export const Start = () => {
  const navigate = useNavigate()

  return (
    <div className="result">
      <h2>Начнём!</h2>
      <p>Нужно ответить на мои 10 вопросов, всё просто, приступай!</p>
      <button onClick={() => navigate('/game')}>Начать</button>
    </div>
  )
}
