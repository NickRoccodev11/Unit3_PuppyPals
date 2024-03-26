const List = ({ puppies, choosePuppy, isChecked }) => {
  return (
    <>
      {
        puppies.filter(puppy=>{
          return !isChecked ||  puppy.isCute
        }).map((puppy) => {
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