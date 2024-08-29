import { useState } from 'react'
import Box from './componetns/Box'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Box heading='priyal'  func={(a: string, b: number) => alert(a + b)} >
          <button>Click me</button>
        </Box>
      </div>
    </>
  )
}

export default App
