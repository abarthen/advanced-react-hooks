// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

const CounterContext = React.createContext()

function CountProvider(props) {
  const values = React.useState(0)
  return <CounterContext.Provider value={values} {...props} />
}

function useCount() {
  const context = React.useContext(CounterContext)
  if (typeof context === 'undefined') {
    throw new Error('May only be used within a context')
  }
  return context
}

function CountDisplay() {
  const [count] = useCount()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [, setCount] = useCount()
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
