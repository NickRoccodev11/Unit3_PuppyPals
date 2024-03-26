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

  return (
    <div className='app'>
      <CuteFilter
       setIsChecked={setIsChecked}
       isChecked={isChecked}
       />
      <List
        puppies={puppies}
        isChecked={isChecked}
        choosePuppy={setFeatPup}
      />
      <Display puppyToDisplay={featPup} />
    </div>
  )
}

export default App
