import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import FormContext from './FormContext/FormContext'
import NotFound from './components/NotFound'

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

class App extends Component {
  state = {inputValue: '', activeId: topicsList[0].id}

  changeInput = value => {
    this.setState({inputValue: value})
  }

  changeTopic = id => {
    this.setState({activeId: id})
  }

  render() {
    const {inputValue, activeId} = this.state
    return (
      <FormContext.Provider
        value={{
          inputValue,
          activeId,
          changeInput: this.changeInput,
          changeTopic: this.changeTopic,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </FormContext.Provider>
    )
  }
}

export default App
