import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserAnalytics from '../pages/UserAnalytics'
import PostList from '../pages/PostList'
import UserList from "../pages/UserList";
import PostById from '../component/PostById';
import PostForm from '../pages/PostForm';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<PostList />}/>
      <Route path='/posts/:id' element={<PostById/>}/>
      <Route path='/users/list' element={<UserList/>}/>
      <Route path='/analytics' element={<UserAnalytics/>}/>
      <Route path='/post-form' element={<PostForm/>}/>
    </Routes>
  )
}

export default MainRoutes