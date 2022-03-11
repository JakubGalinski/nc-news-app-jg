import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByArticleId } from "../api";
import Loading from "./Loading";

export default function CommentCard(props) {
	const { article_id } = useParams();

	const [comments, setComments] = useState([]);

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getCommentsByArticleId(article_id).then(({ comments }) => {
			setComments(comments);
			setIsLoading(false);
		});
	}, [article_id]);

	if (isLoading)
		return (
			<>
				<Loading />
			</>
		);
	return (
		<>
			<ul className="commentsCard">
				{comments.map(({author, article_id, body}) => {
					return (
						<>
							<li key={article_id || `comment-${article_id}`} className="commentSection">
								<p>
									Author: <strong>{author}</strong>
								</p>
                <p className="commentBody">
                  {body}
                </p>
							</li>
						</>
					);
				})}
			</ul>
		</>
	);
}