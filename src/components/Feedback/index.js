// Write your React code here.
import {Component} from 'react'
import EmojiList from '../EmojiList'

import './index.css'

class Feedback extends Component {
  render() {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            How satishfied are you with our customer support performance?
          </h1>
          <div className="emoji-container">
            {emojis.map(eachEmoji => (
              <EmojiList eachEmoji={eachEmoji} key={eachEmoji.id} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Feedback
