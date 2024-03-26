//data
import { puppyList } from './data.js'
//methods
import { useState } from 'react'
//components
import List from './List.jsx'
import Display from './Display.jsx'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPup, setFeatPup] = useState(null)

  const handlePuppyChoice = (puppy) => {
    const selectedPup = puppies.find(curPup => {
      return curPup.id === puppy.id
    })
    setFeatPup(selectedPup)
  }

  return (
    <div className='app'>
      <List
        puppies={puppies}
        choosePuppy={handlePuppyChoice}
      />
      <Display puppyToDisplay={featPup} />
    </div>
  )
}

export default App
