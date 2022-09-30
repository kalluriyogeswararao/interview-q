import React from 'react'

const FormContext = React.createContext({
  inputValue: '',
  activeId: '',
  changeInput: () => {},
  changeTopic: () => {},
})

export default FormContext
