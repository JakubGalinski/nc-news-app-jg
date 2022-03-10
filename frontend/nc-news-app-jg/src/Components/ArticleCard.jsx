import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";

export default function ArticleCard() {
	const { article_id } = useParams();

	const [article, setArticleById] = useState([]);

	useEffect(() => {
		getArticleById(article_id).then(({ article }) => {
			setArticleById(article);
		});
	}, [article_id]);

	return (
		<ul className="articleCardList">
			<h3>{article.title} </h3>
			<h4> Author: {article.author}</h4>
			<li>{article.body}</li>
			<h5> Topic: {article.topic}</h5>
		</ul>
	);
}
