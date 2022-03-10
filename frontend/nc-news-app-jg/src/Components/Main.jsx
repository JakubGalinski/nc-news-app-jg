import React from "react";
import { Route, Routes } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import ArticlesBoard from "./ArticlesBoard";
import NavBar from "./NavBar";
import TopicCard from "./TopicCard";
import Topics from "./Topics";

export default function Main() {
	return (
		<div className="main">
			<NavBar />

			<Routes>
				<Route path="/" element={<ArticlesBoard />}></Route>
				<Route path="/api/topics" element={<Topics />}></Route>
				<Route path='/api/topics/:params' element={<TopicCard />}></Route>
				<Route path="/articles/:article_id" element={<ArticleCard></ArticleCard>}></Route>
			</Routes>
		</div>
	);
}
