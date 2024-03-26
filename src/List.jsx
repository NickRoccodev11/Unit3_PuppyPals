

const List = ({ puppies, choosePuppy }) => {
  return (
    <>
      {
        puppies.map((puppy) => {
          return <p
            className='listp'
            onClick={() => choosePuppy(puppy)}
            key={puppy.id}
          >
            {puppy.name}
          </p>
        })
      }
    </>
  )
}

export default List