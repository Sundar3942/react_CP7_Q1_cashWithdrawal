// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationItem, onClickButton} = props
  const {value} = denominationItem

  const onClickingButton = () => {
    onClickButton(value)
  }

  return (
    <li>
      <button
        onClick={onClickingButton}
        type="button"
        className="denominationButton"
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
