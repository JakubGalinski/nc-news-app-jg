import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'

export default function Main() {
  return (
    <div>\
      {console.log("inisde main page")}
      <NavBar />
      <ArticleCard />
      <Routes>
        <Route>
            path ="/" element={<HomePage />}
        </Route>

      </Routes>
    
    </div>
  )
}
