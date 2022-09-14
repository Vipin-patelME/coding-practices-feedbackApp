import './index.css'

const EmojiList = props => {
  const {eachEmoji} = props
  const {name, imageUrl} = eachEmoji
  return (
    <li className="emoji-item">
      <img src={imageUrl} alt="Emoji" className="emoji-style" />
      <p className="paragraph">{name}</p>
    </li>
  )
}
export default EmojiList
