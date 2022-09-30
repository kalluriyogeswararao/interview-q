import {Link} from 'react-router-dom'
import Header from '../Header'
import FormContext from '../../FormContext/FormContext'
import './index.css'

const Home = () => {
  const onDisplayCompleteRegistration = ({inputValue, activeId}) => (
    <div className="bg-container">
      <Header />
      <div className="details-container">
        <h1 className="heading">Hello {inputValue}</h1>
        <p className="topic">{activeId}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
          alt="meetup"
          className="image"
        />
      </div>
    </div>
  )

  const onRenderRegister = () => (
    <div className="bg-container">
      <Header />
      <div className="details-container">
        <h1 className="heading">Welcome to Meetup</h1>
        <p className="topic">Please register for the Topic</p>
        <Link to="/register">
          <button className="button" type="button">
            Register
          </button>
        </Link>
        <img
          src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
          alt="meetup"
          className="image"
        />
      </div>
    </div>
  )

  return (
    <FormContext.Consumer>
      {value => {
        const {inputValue, activeId} = value
        if (inputValue !== '') {
          return onDisplayCompleteRegistration({inputValue, activeId})
        }
        return onRenderRegister()
      }}
    </FormContext.Consumer>
  )
}

export default Home
