// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isClick: false}

  onClickIconButton = () => {
    this.setState(prevState => ({
      isClick: !prevState.isClick,
    }))
  }

  render() {
    const {isClick} = this.state
    const {faqDetails} = this.props
    const {questionText, answerText, id} = faqDetails
    const signImage = isClick
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const singAltText = isClick ? 'minus' : 'plus'
    return (
      <li className="list-item">
        <div className="question-background">
          <div className="question-container">
            <h1 className="question">{questionText}</h1>
            <button
              type="button"
              className="button"
              onClick={this.onClickIconButton}
            >
              <img src={signImage} alt={singAltText} className="icon" />
            </button>
          </div>
          {isClick && (
            <div className="answer-container">
              <hr className="horizontal-line" />
              <p className="answer">{answerText}</p>
            </div>
          )}
        </div>
      </li>
    )
  }
}
export default FaqItem
