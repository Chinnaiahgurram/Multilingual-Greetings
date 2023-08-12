import './index.css'

const BtnCard = props => {
  const {eachDetails, onClickButtonElement, isActive} = props
  const {id, imageUrl, buttonText, imageAltText} = eachDetails

  const onClickbtn = () => {
    onClickButtonElement(imageUrl, id, imageAltText)
  }

  return (
    <li key={id} className="item">
      <button type="button" className="button" onClick={onClickbtn}>
        {buttonText}
      </button>
    </li>
  )
}

export default BtnCard
