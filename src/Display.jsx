const Display = ({ puppyToDisplay }) => {
  return (
    <>
      {puppyToDisplay && (
        <div id="feature">
          <h2>{puppyToDisplay.name}</h2>
          <ul>
            <li>Age: {puppyToDisplay.age}</li>
            <li>Email: {puppyToDisplay.email}</li>
          </ul>
        </div>
      )}
    </>
  )
}

export default Display