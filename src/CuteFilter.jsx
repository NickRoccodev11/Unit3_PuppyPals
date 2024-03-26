
const CuteFilter = ({ setIsChecked, isChecked }) => {
  return (
    <>

      <label>
        Show Only Cute Puppies:
        <input type="checkbox" onChange={() => setIsChecked(!isChecked)} />
      </label>
    </>
  )
}

export default CuteFilter