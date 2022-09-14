import './index.css'

const EmojiList = props => {
  const {eachEmoji} = props
  const {name, imageUrl} = eachEmoji
  return (
    <div className="emoji-item">
      <img src={imageUrl} alt="Emoji" className="emoji-style" />
      <p className="paragraph">{name}</p>
    </div>
  )
}
export default EmojiList
