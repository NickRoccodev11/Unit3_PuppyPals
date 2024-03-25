import { puppyList } from './data.js'
import { useState } from 'react'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)

  const featuredPup = puppies.find(curPup => {
    return curPup.id === featPupId
  })


  return (
    <div className='app'>
      {
        puppies.map((puppy) => {
          return <p
            className='listp'
            onClick={() => { setFeatPupId(puppy.id) }}
            key={puppy.id}
          >
            {puppy.name}
          </p>
        })
      }
      {featPupId && (
        <div id="feature">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default App
