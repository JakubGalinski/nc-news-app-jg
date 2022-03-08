import React from 'react'
import ArticlesList from './ArticlesList'
import SortNavBar from "./SortNavBar"

export default function ArticlesBoard() {
  return (
    <div className='articlesBoard'>
        {/* {console.log("inisde artBoard comp")} */}
    ArticlesBoard
    <SortNavBar />
    <ArticlesList />
    </div>
  )
}
