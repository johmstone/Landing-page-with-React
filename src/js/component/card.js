import React from "react";
import PropType from "prop-types";

export function Card(props) {
	//here you have to return expected html using the properties being passed to the component
	return (
		<div className="col-md-3">
			<div className="card">
				<img src={props.imageURL} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{props.cardTitle}</h5>
					<p className="card-text">{props.cardDescription}</p>
					<a
						target="_blank"
						href={props.buttonURL}
						className="btn btn-primary"
						rel="noreferrer">
						{props.buttonLabel}
					</a>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	imageURL: PropType.string,
	cardTitle: PropType.string,
	cardDescription: PropType.string,
	buttonURL: PropType.string,
	buttonLabel: PropType.string
	// 2) add here the new properties into the proptypes object
};
