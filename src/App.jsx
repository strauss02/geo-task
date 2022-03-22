import React from 'react'
import { ReactComponent as Logo } from './logo.svg'
import './App.css'
import { useGetProbabilityQuery } from './redux/features/auroraAPI'

function App() {
  const {
    data: probability,
    error: getProbabilityError,
    isLoading: getProbabilityLoading,
  } = useGetProbabilityQuery(80, 80)

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload. Best of luck on your
          task!
        </p>
      </header>
    </div>
  )
}

export default App
