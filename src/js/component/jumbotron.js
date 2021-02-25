import React from "react";

const styleCSS = {
	margintop: "5rem !important"
};

export function Jumbotron() {
	//here you have to return expected html using the properties being passed to the component
	return (
		<div className="jumbotron m-5">
			<h1 className="display-4">A Warn Welcome!!!</h1>
			<p className="lead">
				Lorem ipsum dolor sit amet consectetur adipiscing elit className
				ut, tempor ad interdum nisi cubilia sociosqu augue vivamus,
				habitant aliquet laoreet potenti phasellus sem cras dui.
				Convallis ligula dictumst eros magnis odio turpis malesuada
				vulputate, nec risus habitant mauris suspendisse augue eleifend
				vivamus venenatis, curae porttitor id cubilia enim aenean
				facilisis. Accumsan quisque tincidunt congue eu non volutpat
				mauris magnis penatibus, montes neque sem duis sapien cubilia
				dignissim
			</p>
			<a className="btn btn-primary btn-lg" href="" role="button">
				Call to Action
			</a>
		</div>
	);
}
