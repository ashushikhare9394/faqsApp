// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="app-container">
        <div className="bg-container">
          <h1 className="heading">FAQS</h1>
          <ul>
            {faqsList.map(each => (
              <FaqItem key={each.id} faqDetails={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
