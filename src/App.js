import { Game } from './components/Game'
import { questions } from './components/Questions'
import { Result } from './components/Result'
import { Start } from './components/Start'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'

function App() {
  const [step, setStep] = useState(0)
  const [correct, setCorrect] = useState(0)
  const question = questions[step]

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<Start />} path="/quiz" />
          <Route
            element={
              <Game
                step={step}
                question={question}
                correct={correct}
                setStep={setStep}
                setCorrect={setCorrect}
              />
            }
            path="/quiz/game"
          />
          <Route
            element={
              <Result
                correct={correct}
                setStep={setStep}
                setCorrect={setCorrect}
              />
            }
            path="/quiz/result"
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App
