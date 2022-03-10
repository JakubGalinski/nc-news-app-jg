import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getArtilcesAll } from "../api";
import ArticleCard from "./ArticleCard";

export default function ArticlesList() {
	const [articles, setArticlesAll] = useState([]);

	useEffect(() => {
		getArtilcesAll().then((articleList) => {
			setArticlesAll(articleList);
		});
	}, []);
	return (
		<div className="articlesList">
			<section>
				<ul className="article-list-ul">
					{articles.map((article) => {
						return (
							<li className="singleArticle" key={article.article_id}>
								<h4>{article.title} </h4>
								<p>Topic: {article.topic}</p>
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
			</section>
		</div>
	);
}
