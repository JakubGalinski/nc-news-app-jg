import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticlesByTopic } from "../api";
import SortNavBar from "./SortNavBar";

export default function TopicCard() {
	const { topic } = useParams();

	const [articles, setArticlesByTopic] = useState([]);

	useEffect(() => {
		getArticlesByTopic(topic).then(({ articles }) => {
			setArticlesByTopic(articles);
		});
	}, [topic]);

	return (
		<div>
			<SortNavBar />
			<ul className="topicCard">
				{articles.map((article) => {
					return (
						<li key={article.article_id} className="topicCardSingle">
							<h4>{article.title}</h4>
							<h5>Topic :{article.topic}</h5>
							<Link
								to={`/articles/${article.article_id}`}
								className="linkTopicCard"
							>
								Go to article
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
