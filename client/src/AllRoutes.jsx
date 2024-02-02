import React from 'react'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import { Routes,Route } from 'react-router-dom'
import Questions from './pages/Questions/Questions'
// import AskQuestion from './pages/AskQuestions/AskQuestions'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import DisplayQuestion from './pages/Questions/DisplayQuestion'
import Tags from './pages/Tags/Tags'
import Users from './pages/Users/Users'
// import UserProfile from './pages/UserProfile/UserProfile'
import UserProfile from './pages/UserProfile/UserProfile'


const AllRoutes = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/Auth" element={<Auth/>}></Route>
        <Route exact path="/Questions" element={<Questions/>}></Route>
        <Route exact path='/AskQuestions' element={<AskQuestion/>}></Route>
        <Route exact path='/Questions/:id' element={<DisplayQuestion/>}></Route>
        <Route exact path='/Users/:id' element={<UserProfile/>}></Route>
        <Route exact path='/Users' element={<Users/>}></Route>

        <Route exact path='/Tags' element={<Tags/>}></Route>
    </Routes>
  )
}

export default AllRoutes
