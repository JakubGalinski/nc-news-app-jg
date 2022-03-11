import React, { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { getTopics } from "../api";
import Loading from "./Loading";

export default function Topics() {
	const [topics, setTopics] = useState([]);

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getTopics().then(({ topics }) => {
			setTopics(topics);
			setIsLoading(false);
		});
	}, []);
	
	if (isLoading) return (<><Loading /></>)
	return (
		<section>
			<ul className="topics">
				{topics.map((topic) => {
					return (
						<span className="topicslist" key={topic.slug}>
							<Link to={`/api/topics/${topic.slug}`} topicslug={topic.slug}>{topic.slug} </Link>
						</span>
					);
				})}
			</ul>
		</section>
	);
}
