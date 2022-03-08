import React, { useState, useEffect } from "react";
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
				<ul>
					List of articles should display here
					{articles.map((article) => {
						return ( 

            <li key={article.article_id}>
             <p>{article.title} </p>
              {/* here will be a link to go to single Article card which will get clicked article by its ID */}
            </li>)
           
					})}
				</ul>
			</section>
		</div>
	);
}
