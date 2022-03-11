import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<div className="navBar">
			<Link className="ArticleBoard" to="/">
				HomePage
			</Link>
			<Link className="Topics" to="/api/topics">
				Topics
			</Link>
		
		</div>
	);
}
