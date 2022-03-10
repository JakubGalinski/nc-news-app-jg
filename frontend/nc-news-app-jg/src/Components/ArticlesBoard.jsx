import React from 'react'
import ArticlesList from './ArticlesList'
import SortNavBar from "./SortNavBar"

export default function ArticlesBoard() {
  return (
    <div className='articlesBoard'>
    <SortNavBar />
    <ArticlesList />
    </div>
  )
}
