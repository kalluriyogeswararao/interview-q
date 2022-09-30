import {Component} from 'react'
import Header from '../Header'
import FormContext from '../../FormContext/FormContext'

import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {
    activeId: topicsList[0].id,
    inputText: '',
    showError: false,
    displayValue: '',
  }

  onChangeInput = event => {
    this.setState({inputText: event.target.value})
  }

  onChangeTopic = event => {
    this.setState({activeId: event.target.value})
  }

  onRenderDetails = () => (
    <FormContext.Consumer>
      {value => {
        const {changeInput, changeTopic} = value
        const {activeId, inputText, showError} = this.state
        const {history} = this.props

        const onSubmitForm = event => {
          event.preventDefault()

          if (inputText !== '') {
            changeInput(inputText)
            const findTopic = topicsList.find(item => item.id === activeId)
            changeTopic(findTopic.displayText)
            history.replace('/')
          } else {
            this.setState({showError: true})
          }
        }

        return (
          <div className="details-register-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
              className="register-image"
            />
            <form className="form-container" onSubmit={onSubmitForm}>
              <h1>Let us join</h1>
              <div className="input-container">
                <label htmlFor="name" className="label">
                  NAME
                </label>
                <input
                  id="name"
                  className="input"
                  placeholder="Your name"
                  onChange={this.onChangeInput}
                  value={inputText}
                />
              </div>
              <div className="input-container">
                <label htmlFor="topic" className="label">
                  TOPICS
                </label>
                <select
                  className="input"
                  id="topic"
                  onChange={this.onChangeTopic}
                  value={activeId}
                >
                  {topicsList.map(each => (
                    <option value={each.id} key={each.id}>
                      {each.displayText}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="register-btn">
                Register Now
              </button>
              {showError && <p className="error-msg">Please Enter Your Name</p>}
            </form>
          </div>
        )
      }}
    </FormContext.Consumer>
  )

  render() {
    return (
      <div className="bg-container">
        <Header />
        {this.onRenderDetails()}
      </div>
    )
  }
}

export default Register
