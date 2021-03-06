import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import ArticleVoteHandler from "./ArticleVoteHandler";
import Loading from "./Loading";

export default function ArticleCard() {
	const { article_id } = useParams();

	const [article, setArticleById] = useState([]);

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getArticleById(article_id).then(({ article }) => {
			setArticleById(article);
			setIsLoading(false);
		});
	}, [article_id]);

	if (isLoading) return (<><Loading /></>)
	return (
		<ul className="articleCardList">
			<h3>{article.title} </h3>
			<p>
				Author: <strong>{article.author}</strong>
			</p>
			<li>{article.body}</li>
			<ArticleVoteHandler articleId={article_id} articleVotes={article.votes} />
			<p>
				Comments: <strong>{article.comment_count}</strong>
			</p>
			<p>
				Topic: <strong>{article.topic}</strong>
			</p>
		</ul>
	);
}
