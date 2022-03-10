import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../api";

export default function Topics() {
	const [topics, setTopics] = useState([]);

	useEffect(() => {
		getTopics().then(({ topics }) => {
			setTopics(topics);
		});
	}, []);

	return (
		<section>
			<ul className="topics">
				{topics.map((topic) => {
					return (
						<span className="topicslist" key={topic.slug}>
							<Link to={`/api/topics/${topic.slug}`}>
								<button>{topic.slug}</button>
							</Link>
						</span>
					);
				})}
			</ul>
		</section>
	);
}
