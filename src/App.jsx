import React from 'react'
import { ReactComponent as Logo } from './logo.svg'
import './App.css'
import {
  useGetLocationsQuery,
  useGetProbabilityQuery,
} from './redux/features/auroraAPI'

function App() {
  const {
    data: probability,
    error: getProbabilityError,
    isLoading: getProbabilityLoading,
  } = useGetProbabilityQuery(80, 80)

  const {
    data: locations,
    error: getLocationsError,
    isLoading: getLocationsLoading,
  } = useGetLocationsQuery()

  console.log(probability)
  console.log(locations)

  return (
    <div className="App">
      <header className="App-header">
        <p>probability</p>
      </header>
    </div>
  )
}

export default App
