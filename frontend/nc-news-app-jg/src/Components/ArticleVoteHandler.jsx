import React, { useEffect, useState } from "react";
import { patchArticleVote } from "../api";

export default function ArticleVoteHadler({ articleVotes, articleId }) {

    console.log(articleVotes,  "AAAAA");

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





// import React, { useEffect, useState } from "react";
// import { patchArticleVote } from "../api";

// export default function ArticleVoteHadler({ articleVotes, articleId }) {

//     console.log(articleVotes,  "AAAAA");

// 	const [votecrement, setVotecrement] = useState(0);
//     const [votes, setVotes ] = useState(articleVotes)
//     console.log(typeof votes ," VVVVVV")

//     useEffect(() => {
//         setVotes(() =>{ return articleVotes})
//     }, [votes])

// 	const handleIncrement = (incVotes) => {
// 		setVotecrement((currentVotecrement) => {
// 			return currentVotecrement + incVotes;
// 		});
//         setVotes(() => {
//             const newVotes = votes + incVotes;
//             return newVotes
//         })
// 		patchArticleVote(articleId, incVotes)
//         .catch((err) => {
// 			setVotecrement((currentVotecrement) => {
// 				return currentVotecrement - incVotes;
// 			});
// 		});
// 	};

// 	return (
// 		<span className="articleVoterSpan">
// 			<button
// 				disabled={votecrement > 0}
// 				onClick={() => {
// 					handleIncrement(1);}}	>	+1	</button>
// 			<p>Votes: <strong>{votes}</strong></p>
// 			<button
// 				disabled={votecrement < 0}
// 				onClick={() => {
// 					handleIncrement(-1);	}}>	-1
// 			</button>
// 		</span>
// 	);
// }