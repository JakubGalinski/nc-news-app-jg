import React from "react";
import { Route, Routes } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import ArticlesBoard from "./ArticlesBoard";
import CommentList from "./CommentList";
import NavBar from "./NavBar";
import TopicCard from "./TopicCard";
import Topics from "./TopicsCard";

export default function Main() {
	return (
		<div className="main">
			<NavBar />

			<Routes>
				<Route path="/" element={<ArticlesBoard />}></Route>
				<Route path="/api/topics" element={<Topics />}></Route>
				<Route path='/api/topics/:topic' element={<TopicCard />}></Route>
				<Route path="/articles/:article_id" element={<ArticleCard />}></Route>
				<Route path="/api/articles/comments/:article_id" element={<CommentList />}></Route>
			</Routes>
		</div>
	);
}
