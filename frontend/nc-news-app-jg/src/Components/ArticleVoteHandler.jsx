import React, { useEffect, useState } from "react";
import { patchArticleVote } from "../api";

export default function ArticleVoteHadler({ articleVotes, articleId }) {

	const [votecrement, setVotecrement] = useState(0);
 
	const handleIncrement = (incVotes) => {
		setVotecrement((currentVotecrement) => {
			return currentVotecrement + incVotes;
		});
		patchArticleVote(articleId, incVotes)
        .catch((err) => {
			setVotecrement((currentVotecrement) => {
				return currentVotecrement - incVotes;
			});
		});
	};

	return (
		<span className="articleVoterSpan">
			<button
				disabled={votecrement > 0}
				onClick={() => {handleIncrement(1);}}>+1</button>
			<p>Votes: <strong>{articleVotes + votecrement}</strong></p>
			<button
				disabled={votecrement < 0}
				onClick={() => {handleIncrement(-1);}}>-1</button>
		</span>
	);
}
