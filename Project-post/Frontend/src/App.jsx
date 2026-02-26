import React from 'react'
import {BrowserRouter as Router,Routes,Route  } from 'react-router-dom'
import CreatePost from './Pages/CreatePost'
import Feed from './Pages/feed'

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<CreatePost/>} ></Route>
        <Route path='/feed' element={<Feed/>}></Route>
      </Routes> 
      
  )
}

export default App