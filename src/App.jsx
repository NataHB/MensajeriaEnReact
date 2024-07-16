import React from 'react'
import { ChatScreen } from './Screens'
import { Route, Routes } from 'react-router-dom'
import { ChatList } from './Screens/ChatList'


const App = () => {
  return (
    <Routes>
      <Route path='/' element = {<ChatList/>}/>
      <Route path='/chat/:id' element = {<ChatScreen/>}/>
    </Routes>
  )
}

export default App
