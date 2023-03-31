import React from 'react'
import { AlphabetOnlyKeypad } from 'rc-keypad'
const App = () => {
  return <AlphabetOnlyKeypad onKeyPress={(key) => console.log(key)} colorMode='dark' />
}

export default App
