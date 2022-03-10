import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticlesByTopic } from "../api";
import SortNavBar from "./SortNavBar";

export default function TopicCard() {
	const { params } = useParams();

	const [articles, setArticlesByTopic] = useState([]);

	useEffect(() => {
		getArticlesByTopic(params).then(({ articles }) => {
			setArticlesByTopic(articles);
		});
	}, [params]);

	return (
		<div>
			<SortNavBar />
			<ul className="topicCard">
				{articles.map((article) => {
					return (
						<li key={article.article_id} className="topicCardSingle">
							<p>{article.title}</p>
							<p>Topic :{article.topic}</p>
							<Link
								to={`/articles/${article.article_id}`}
								className="linkTopicCard"
							>
								<button>Go to article</button>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
