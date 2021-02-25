import React from "react";

//create your first component
const currentYear = new Date().getFullYear();

export function Footer() {
	return (
		<div className="bg-dark text-center text-white">
			<p className="m-0 p-3">
				Copyright &copy; Your Website {currentYear}
			</p>
		</div>
	);
}
