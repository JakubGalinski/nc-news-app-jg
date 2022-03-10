import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<div className="navBar">
			<Link to="/">
				<button label="ArticleBoard">HomePage</button>
			</Link>
			<Link to="/api/topics">
				<button label="Topics">Topics</button>
			</Link>
		</div>
	);
}
