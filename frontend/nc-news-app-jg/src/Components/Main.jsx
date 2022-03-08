import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ArticlesBoard from './ArticlesBoard'
import HomePage from './HomePage'
import NavBar from './NavBar'

export default function Main() {
  return (
    <div className='main'>
      {/* {console.log("inisde main comp")} */}
      <NavBar />
      <ArticlesBoard />
    
      {/* <Routes>
        <Route path ="/" element={<HomePage />} />
            
       
      </Routes> */}
    
    </div>
  )
}
