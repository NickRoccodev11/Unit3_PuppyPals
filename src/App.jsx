//data
import { puppyList } from './data.js'
//methods
import { useState } from 'react'
//components
import List from './List.jsx'
import Display from './Display.jsx'
import CuteFilter from './CuteFilter.jsx'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPup, setFeatPup] = useState(null)
  const [isChecked, setIsChecked] = useState(false)

  const handlePuppyChoice = (puppy) => {
    const selectedPup = puppies.find(curPup => {
      return curPup.id === puppy.id
    })
    setFeatPup(selectedPup)
  }
  return (
    <div className='app'>
      <CuteFilter
       setIsChecked={setIsChecked}
       isChecked={isChecked}
       />
      <List
        puppies={puppies}
        isChecked={isChecked}
        choosePuppy={handlePuppyChoice}
      />
      <Display puppyToDisplay={featPup} />
    </div>
  )
}

export default App
